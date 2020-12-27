(function() {

    angular.module('app')
        .factory('dataService', ['$q',   '$http',  dataService]);


    function dataService($q,   $http, $cacheFactory) {

        var dataServiceVar = 'dataServiceVar' 
        console.log(dataServiceVar);

        return {
            getAllPatients: getAllPatients, 
            getPatientByID: getPatientByID,
            updatePatient: updatePatient,
            addPatient: addPatient,
            deletePatient: deletePatient,
            getUserSummary: getUserSummary,
            patientApi: patientApi
        };


////////////// 
        // db version: Mongo (using Mongoose)

        const Patient = $resource('/api/patients');
        Patient.query(function (results) {
            $scope.patients = results;
        })
        $scope.patients = []

        $scope.deleteLastPatient = function () {
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

////////////////






        function patientApi() {
          //  var service = {};
        
          //  service.search = function(query) {
            // return {"patientData": [
            //     {
            //         "patient_id": 1,
            //         "name": "Thomas Maestas",
            //         "age": "83",
            //         "gender": "male",
            //         "email": "thomasm1.maestas@gmail.com",
            //         "height": "60",
            //         "dob": "1976-09-01",
            //         "address": "2300 calle de real"
            //     }, 
            // ]}
            } 
 
 

        function getUserSummary() {

            var deferred = $q.defer();

            // var dataCache = $cacheFactory.get('patientLoggerCache');
           // if (!dataCache) {
            //     dataCache = $cacheFactory('patientLoggerCache');
            // }
            // var summaryFromCache = dataCache.get('summary');
            // if (summaryFromCache) {
            //     //console.log('returning summary from cache');
            //     deferred.resolve(summaryFromCache);
            // } else {
                //console.log('gathering new summary data');

                var patientsPromise = getAllPatients(); 
                // $q.all([patientsPromise])
                //     .then(function (patientLoggerData) {
                //         var allPatients = patientLoggerData[0]; 
                  //         var summaryData = {
                //             patientCount: allPatients.length 
                //         };
                //         dataCache.put('summary', summaryData);
                //         deferred.resolve(summaryData);
                //     });
            }

            return deferred.promise;

        }

        // function deleteSummaryFromCache() {

        //     var dataCache = $cacheFactory.get('patientLoggerCache');
        //     dataCache.remove('summary');

        // }

        function getAllPatients() {

            return $http({
                method: 'GET',
                url: 'api/patients',
                headers: {
                    'PS-PatientLogger-Version': '1'
                },
                transformResponse: transformGetPatients,
                cache: true
            })
            .then(sendResponseData)
            .catch(sendGetPatientsError)

        }

        function getPatientByID(patientID) {

            return $http.get('api/patients/' + patientID)
            .then(sendResponseData)
            .catch(sendGetPatientsError);

        }

        function updatePatient(patient) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http({
                method: 'PUT',
                url: 'api/patients/' + patient.patient_id,
                data: patient
            })
            .then(updatePatientSuccess)
            .catch(updatePatientError);

        }

        function addPatient(newPatient) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http.post('api/patients', newPatient, {
                transformRequest: transformPostRequest
            })
            .then(addPatientSuccess)
            .catch(addPatientError);
        }

        function transformPostRequest(data, headersGetter) {

            data.newPatient = true;

            console.log(data);

            return JSON.stringify(data);
        }

        function deletePatient(patientID) {

            deleteSummaryFromCache();
            deleteAllPatientsResponseFromCache();

            return $http({
                method: 'DELETE',
                url: 'api/patients/' + patientID
            })
                .then(deletePatientSuccess)
                .catch(deletePatientError);

        }

        // function deleteAllPatientsResponseFromCache() {

        //     var httpCache = $cacheFactory.get('$http');
        //     httpCache.remove('api/patients');

        // }


        // function transformGetPatients(data, headersGetter) {

        //     var transformed = angular.fromJson(data);

        //     transformed.forEach(function (currentValue, index, array) {
        //         currentValue.dateDownloaded = new Date();
        //     });

        //     //console.log(transformed);
        //     return transformed;

        // }

        function sendResponseData(response) {

            return response.data;

        }

        function sendGetPatientsError(response) {

            return $q.reject('Error retrieving patient(s). (HTTP status: ' + response.status + ')');

        }

        function updatePatientSuccess(response) {

            return 'Patient updated: ' + response.config.data.name;

        }

        function updatePatientError(response) {

            return $q.reject('Error updating patient.(HTTP status: ' + response.status + ')');

        }

        function addPatientSuccess(response) {

            return 'Patient added: ' + response.config.data.name;

        }

        function addPatientError(response) {

            return $q.reject('Error adding patient. (HTTP status: ' + response.status + ')');

        }

        // function deletePatientSuccess(response) {

        //     return 'Patient deleted.';

        // }

        // function deletePatientError(response) {

        //     return $q.reject('Error deleting patient. (HTTP status: ' + response.status + ')');

        }
 
    }

}());