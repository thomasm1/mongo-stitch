(function() {

angular.module('app.patientApi', [])
.factory('PatientApi',  function() {
    var PatientApi = {};

    var PatientApiVar = 'PatientApiVar' 
    console.log(PatientApiVar);

    PatientApi.search = function(query) {
    return {"patientData":  [
        {
            "patient_id": 1,
            "name": "Thomas Maestas",
            "age": "23",
            "gender": "male",
            "email": "thomasm1.maestas@gmail.com",
            "height": "60",
            "dob": "09/03/1976",
            "address": "2300 calle de real"
        },
        {
            "patient_id": 2,
            "name": "Sarah Braser",
            "age": "33",
            "gender": "female",
            "email": "sue.grammar@gmail.com",
            "height": "54",
            "address": "2 Teal Dr."
        },
        {
            "patient_id": 5,
            "address": "j",
            "name": "Henry Q Coder"
        },
        {
            "patient_id": 6,
            "name": "Stephen Jackson"
        }
    ]}
    }
    PatientApi.find = function(id) {
        
    return     {
        "patient_id": 1,
        "name": "Thomas Maestas",
        "age": "23",
        "gender": "male",
        "email": "thomasm1.maestas@gmail.com",
        "height": "60",
        "dob": "09/03/1976",
        "address": "2300 calle de real"
    }
}
    return PatientApi;
}); 

})();