describe('Registration into patient directory', function () {

    beforeEach(function () {
        browser.get('http://localhost:3000/#/');
    });

    describe('form inputs', function () { 

        it('should accept text input', function () {

            let nameVar = element(by.id('nameVar'));
            nameVar.sendKeys();
             
        });

        it('Should accept specific string, number, date types', function () {

            let addBtn = element(by.id('addBtn'));
            addBtn.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/AddPatient');
        });
        
        it('Should submit() form data, given correct inputs', function () {

            let submit = element(by.id('submit'));
            submit.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/Registered');
        });

        it('Should not submit() form data, given incorrect or missing input', function () {

            let submit = element(by.id('submit'));
            submit.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/Register');
        });
    });

});