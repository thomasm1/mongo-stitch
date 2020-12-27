(function() {

    angular.module('app')
        .controller('AddPatientController', ['$log', '$location', 'dataService', AddPatientController]);

    function AddPatientController($log, $location, dataService) {

        var vm = this;

        vm.newPatient = {};

        vm.addPatient = function () {

            dataService.addPatient(vm.newPatient)
                .then(addPatientSuccess)
                .catch(addPatientError);

        };

        function addPatientSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function addPatientError(errorMessage) {
            $log.error(errorMessage);
        }

    }

}());