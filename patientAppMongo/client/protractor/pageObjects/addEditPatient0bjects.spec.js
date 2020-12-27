var AddEditPatient = function() {
    
    var patientName = Element(by.model('patientAdder.currentPatient.name'));

    // var patientName =  Element(by.id('patientName'));
    // var patientEmail =  Element(by.model('patientEmail'));
    // var patientHeight =  Element(by.model('patientHeight')); 


    this.get = function() {
        browser.get('http://localhost:3000/#/AddPatient');
    };
    var name = 'string'
    // this.getEdit = function() {
    //     browser.get('http://localhost:3000/#/EditPatient');
    // };

    this.setName = function(name) {
        patientName.sendKeys(name);
    };
    
    this.getName = function() {
        return patientName.getText();
    };
};
module.exports = new AddEditPatient();

