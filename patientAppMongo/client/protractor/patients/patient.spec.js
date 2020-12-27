describe('patient directory homepage', function () { 

    beforeEach(function () {
        browser.get('http://localhost:3000/#/');
    });
    describe('patient directory (landing page) functionality', function () {

        it('should find heading and subheadings', function () {


            expect(element(by.id('header1')).getText()).toEqual('Patient Directory')

            expect(element(by.id('header2')).getText()).toEqual('Patient Listings')


        });

        it('should find add and edit buttons', function () {


            expect(element(by.id('addBtn')).getText()).toEqual('Add New Patient')
            expect(element(by.id('editBtn')).getText()).toEqual('Edit')

        });

        it('identify and validate patient list count', function () {

            var patientList = element.all(by.repeater('patient in patients.allPatients'));

            expect(patientList.count()).not.toEqual(null || undefined);

        });


        it('should  click it add button and navigate to add page', function () {

            let addBtn = element(by.id('addBtn'));
            addBtn.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/AddPatient');


        });
    });
});