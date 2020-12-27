describe('patient directory Add Page', function () {

    beforeEach(function () {
        browser.get('http://localhost:3000/#/');
    });

    describe('Patient App Navigation', function () { 
 
        it('Should click() navigate to the add page', function () {

            let addBtn = element(by.id('addBtn'));
            addBtn.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/AddPatient');
        });
        
        it('Should click() navigate to the add page', function () {

            let addBtn = element(by.id('addBtn'));
            addBtn.click();
            expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/AddPatient');
        });

    });

});

// describe('When clicking the add button', function () {
//     it('should identify', function () {
//         // patientList = element.all(by.repeater('patient in patients.allPatients')); 
//         // expect(patientList.count()).not.toEqual(null || undefined); 

//         // let addBtn = element(by.id('addBtn'));
//         // addBtn.click();   
//         // expect(browser.getCurrentUrl()).toMatch('http://localhost:3000/#/AddPatient/'); 

//         // element(by.model('todoList.todoText')).sendKeys('write first protractor test'); 

//         //   element(by.id('headerAdd').click());

//         // element(by.css('[value="add"]')).click();

//         // let todoList = element.all(by.repeater('todo in todoList.todos'));
//         // expect(todoList.count()).toEqual(3);
//         // expect(todoList.get(2).getText()).toEqual('write first protractor test');

//         // // You wrote your first test, cross it off the list
//         // todoList.get(2).element(by.css('input')).click();
//         // let completedAmount = element.all(by.css('.done-true'));
//         // expect(completedAmount.count()).toEqual(2);
//     });
// });
// describe(('click add button, navigate to add', function () {
//     it('should click add button', function () {

//     })
// }))