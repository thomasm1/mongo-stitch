(function () {

    angular.module('app')
        .factory('currentUser', currentUser);

        var id = 1;
        var service = {};
   
        var currentUserVar = 'currentUserVar' 
        console.log(currentUserVar);

        service.find = function(id) {
                return {
                    "patient_id": 1,
                    "name": "patient 1",
                    "age": "23",
                    "gender": "male",
                    "email": "thomasm1.maestas@gmail.com",
                    "height": "60",
                    "dob": "1976-09-01",
                    "address": "2300 calle de real"
                }
        return service;
            }; 
    // Use dependency to access users' timeline of events - for testing purposes: currentUser.lastPatientEdited
    function currentUser() {

        return {
            lastPatientEdited: lastPatientEdited
        };

        var lastPatientEdited = {};
        
    }

}());