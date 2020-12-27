app.controller('PatientsCtrl', ['$rootScope', '$scope', '$resource',
    function($rootScope, $scope, $resource) {  
        $scope.title = "Patient App";
 
        // db version: Mongo (using Mongoose)
        const Patient = $resource('/api/patients'); 
        Patient.query(function (results) {
         $scope.patients = results;
         }) 
         $scope.patients = []  

    $scope.deleteLastPatient = function() {
        $scope.patients.pop();
    };
    
     
    $scope.createPatient = function () {
        const patient = new Patient();
     
        patient.name = $scope.patientName;
        patient.age = $scope.patientAge;
        patient.gender = $scope.patientGender;
        patient.email = $scope.patientEmail;
        patient.height = $scope.patientHeight;
        patient.dob = $scope.patientDob; 
        patient.address = $scope.patientAddress;
        patient.height = $scope.patientHeight;
         
        patient.$save(function (result) {
            $scope.patients.push(result);
            $scope.patientName = '';
        });

// db version:  local file storage 
     /* $scope.patients = [
            {
               // "_id": ObjectId("5cef2a5a420b366a58fdadb3"),
                "name": "Mr. Patient One",
                "age": "23", 
                "gender": "male",
                "email": "thomasm1.maestas@gmail.com",
                "height": "60",
                "dob": "09/03/1996",
                "address": "2300 calle de real"
            },
            { 
            //    "_id" : ObjectId("5cef2ea5c1a79acbaab3f5ee"),
                "name": "Mrs. Patient Two",
                "age": "33",
                "gender": "female",
                "email": "thomasm1.maestas@gmail.com",
                "height": "54",
                "dob": "12/05/1986",
                "address": "2 Teal Dr."
            }
        ] 
*/    
    // $scope.patients.push({ 
    //     name: $scope.patientName,
    //     age: $scope.patientAge, 
    //     gender: $scope.patientGender,
    //     email: $scope.patientEmail,
    //     height: $scope.patientHeight,
    //     dob: $scope.patientDob,
    //     address: $scope.patientAddress
    // });
    // $scope.patientName = '';
    // $scope.patientAge = '';
    // $scope.patientGender = ['male','female']; 
    // $scope.patientEmail = '';
    // $scope.patientHeight = '';
    // $scope.patientDob = '';
    // $scope.patientAddress = '';
    }
}]); 
