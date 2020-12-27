## patientApp
Express-Node.js Patient Portal CRUD application
End-to_End Testing: Protractor-Jasmine (Selenium Web-Driver)
Unit Testing: Karma-Jasmine

### Two-page Angular application (use Angular 1.7.8) with below functionality
####Bootstrap for styling advisable but don’t focus a lot on style 

## Instructions
A. Data server - Node.js-Express
nodemon server (inside top-level app directory)
localhost:3000

B. Unit Testing - Jasmine-Karma
http-client (inside client)
http://localhost:8080/SpecRunner.html 

C. End-to-End Testing - Protractor
protractor conf


#### Landing Page – List all patients using patients name

Click on patient name should navigate to patient edit page

####  Edit Page
```
Patient Edit Page

Name – Text box
Age – Numeric Box
Gender – Dropdown
Email – Textbox (validate using regular expression)
Height – Textbox (Only allow up to 2 decimal place)
Date of Birth – HTML5 Datepicker
Address – Multiline textbox
Save Button – On click add patient to list and navigate back to page 1
Cancel- Navigate back to page 1
Delete Button – Remove patient from list
 ```

### FEATURES:
```
Use of controller, services, directives
Write Unit test for controller, services, functions is must and E2E test cases using Jasmin, Protractor to test UI is must(all elements and workflow you have implemented)
 ```