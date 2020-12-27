app.controller('PatientDetailsCtrl', ['$rootScope', '$scope', '$resource',
    function($rootScope, $scope, $resource) {  
        $scope.title = "Patient Edit App"
 
        const Patient = $resource('/api/patients'); 
        // Patient.query(function (results) {
        //     $scope.patients = results;
        // }) 
        /*   $scope.patients = [] */
 
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
         
        // patient.$save(function (result) {
        //     $scope.patients.push(result);
        //     $scope.patientName = '';
        // });
    $scope.patients.push({ 
        name: $scope.patientName,
        age: $scope.patientAge, 
        gender: $scope.patientGender,
        email: $scope.patientEmail,
        height: $scope.patientHeight,
        dob: $scope.patientDob,
        address: $scope.patientAddress
    });
    $scope.patientName = '';
    $scope.patientAge = '';
    $scope.patientGender = ['male','female']; 
    $scope.patientEmail = '';
    $scope.patientHeight = '';
    $scope.patientDob = '';
    $scope.patientAddress = '';
    }
}]); 