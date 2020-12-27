var AddEditPatient = require('./addEditPatient0bjects.spec.js/index.js.js');

describe('Add and Edit Patient form functionality', function() {
    describe('AddEditPatient form', function() {
        it('should add input data, overwriting name variable, read and confirm new input', function() {
            AddEditPatient.get();

            // adds new name into form (overwriting 'original string' from page object)
            AddEditPatient.setName('Thomas Milton');
            
            // expect new, added name;
            expect(AddEditPatient.getName()).toEqual('Thomas Milton');
        });
    });
        
    // describe('AddEditPatient form', function() {
    //     it('should add input data, overwriting name variable, read and confirm new input', function() {
    //         AddEditPatient.getEdit();

    //         // adds new name into form (overwriting 'original string' from page object)
    //         AddEditPatient.setName('Thomas Milton')
            
    //         // expect new, added name;
    //         expect(AddEditPatient.getName()).toEqual('Thomas Milton');
    //     });
    // });
});
