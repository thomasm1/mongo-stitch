var patientObjects = require('./patientObjects.js');  
  
describe('Protractor Test', function() {  
  
  it('should navigate to the Patient Directory homepage', function() {  
    patientObjects.go();  
  });  
    
  it('should let you add a new task ', function() {  
    patientObjects.addItem('New Task Item')  
  });  
});