(function() {

    angular.module('app')
        .controller('PatientsController', ['$rootScope', '$scope', 'patients', 'dataService',  '$log', '$resource', '$route', 'currentUser', PatientsController]);

        PatientsCtrl = 'PatientsCtrl' 
        console.log(PatientsCtrl);
        
    function PatientsController($rootScope, $scope, patients, dataService,  $log,  $resource, $route, currentUser) {
        $scope.administration = false;
        $scope.toggle = function() {
            ($scope.administration===true)?($scope.administration=false):($scope.administration=true);
        } 
        var vm = this; 
        vm.appName = patients.appName;
        
        // get patient by ID
        vm.patientData =  dataService.patientApi();
        console.log(vm.patientData)
       
        vm.patientData.name = vm.patientData.patientData[0].name;
        console.log(vm.patientData.name);
          

        function getPatientsNotification(notification) {
            console.log('Promise Notification: ' + notification);
         }
        //

        dataService.getUserSummary()
            .then(getUserSummarySuccess);

        function getUserSummarySuccess(summaryData) { 
            vm.summaryData = summaryData;
        }


        dataService.getAllPatients()
            .then(getPatientsSuccess, null, getPatientsNotification)
            .catch(errorCallback)
            .finally(getAllPatientsComplete);

        function getPatientsSuccess(patients) {
            //throw 'error in success handler';
            vm.allPatients = patients;
        }

        function getPatientsNotification(notification) {
           console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllPatientsComplete() {
             console.log('getAllPatients has completed');
        } 
       
        vm.currentUser = currentUser;

        vm.deletePatient = function (patientID) {

            dataService.deletePatient(patientID)
                .then(deletePatientSuccess)
                .catch(deletePatientError);

        };

        function deletePatientSuccess(message) {
            $log.info(message);
            $route.reload();
        }

        function deletePatientError(errorMessage) {
            $log.error(errorMessage);
        }

    }

}());