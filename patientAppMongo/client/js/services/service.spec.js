// Technique  
describe('patientApi factory', function () {
    
    var patientData = { "patientData": [
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
    ] }

    var patientDataById =     {
        "patient_id": 1,
        "name": "Thomas Maestas",
        "age": "23",
        "gender": "male",
        "email": "thomasm1.maestas@gmail.com",
        "height": "60",
        "dob": "09/03/1976",
        "address": "2300 calle de real"
    }
    
    var PatientApi;

    beforeEach(module('app.patientApi'));

    beforeEach(inject(function (_PatientApi_) {   
        PatientApi = _PatientApi_; 
    }));

    it('should confirm defined: search patient data', function () {    
       
       expect(PatientApi).toBeDefined();   
        
    });

    it('should return search patient data', function () {   
   
       var query;
       expect(PatientApi.search(query)).toEqual(patientData); 
    });
 
    it('should return patient id', function () {
        //   angular.mock.module('omdb');  // moved up to beforeEach 
        expect(PatientApi.find('tt3896198')).toEqual(patientDataById);

    });
 
});
