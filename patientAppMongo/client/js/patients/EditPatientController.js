(function () {

    angular.module('app')
        .controller('EditPatientController', ['$rootScope', '$scope', '$resource', '$routeParams', 'patients', '$cookies', '$cookieStore', 'dataService', '$log', '$location', 'currentUser', EditPatientController]);

    function EditPatientController($rootScope, $scope, $resource, $routeParams, patients, $cookies, $cookieStore, dataService, $log, $location, currentUser) {
        $scope.title = "Patient Edit App"
 
        const Patient = $resource('/api/apiPatients'); 
        // Patient.query(function (results) {
        //     $scope.patients = results;
        // }) 
        /*   $scope.patients = [] */

        $scope.patients = [
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
        ];

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
    $scope.patientGender = ''; 
    $scope.patientEmail = '';
    $scope.patientHeight = '';
    $scope.patientDob = '';
    $scope.patientAddress = '';
    }

        var vm = this;

        dataService.getPatientByID($routeParams.patientID)
            .then(getPatientSuccess)
            .catch(getPatientError);

        function getPatientSuccess(patient) {
            vm.currentPatient = patient;
            currentUser.lastPatientEdited = vm.currentPatient;
        }

        function getPatientError(reason) {
            $log.error(reason);
        }
 
        vm.setAsFavorite = function() {

            $cookies.favoritePatient = vm.currentPatient.name;

        };
        vm.savePatient = function() {

            dataService.updatePatient(vm.currentPatient)
                .then(updatePatientSuccess)
                .catch(updatePatientError);

        };

        function updatePatientSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function updatePatientError(errorMessage) {
            $log.error(errorMessage);
        }


    }

}());