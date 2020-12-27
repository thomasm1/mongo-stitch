describe('patient directory Edit Page', function () {

    beforeEach(function () {
        browser.get('http://localhost:3000/#/');
    });

    describe('Patient App Navigation', function () {

        it('Should display array of "edit buttons" ', function () {
            // identify editable list
            patientList = element.all(by.repeater('patient in patients.allPatients'));
            expect(patientList.count()).not.toEqual(null || undefined);

        });


        // describe('Patient directory Edit page functionality')
        it('Should click() navigate to the edit page', function () {

            let editBtn = element(by.id('editBtn'));
            editBtn.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/EditPatient/1');
        });
    });

});