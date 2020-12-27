(function () {

    angular.module('app')
        .factory('PatientsResource', ['$resource', PatientsResource]);

    function PatientsResource($resource) {
        
    var PatientsResourceVar = 'PatientsResourceVar' 
    console.log(PatientsResourceVar);

        // factory which creates a resource object to interact with RESTful server-side data sources. 
        return $resource('/api/patients/:patient_id', {patient_id: '@patient_id'},
            {
                'update': {method: 'PUT'}
            }
        );
    }

}());