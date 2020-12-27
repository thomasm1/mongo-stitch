'use strict';  
  
module.exports = {  
    toDo: {  
        addField: element(by.css('[placeholder="Name"]')),  
        addModel: element(by.model('patientAdder.currentPatient.name')),  
        addButton: element(by.css('[value="btn"]'))  
    },   

    go: function() {  
        browser.get('https://localhost:3000/#/');  
        browser.waitForAngular();  
    },  
      
    addItem: function(item) {  
        var todo = this.toDo;  
          
        todo.addField.isDisplayed();  
        todo.addField.sendKeys(item);  
        todo.addButton.click();  
    }  
};