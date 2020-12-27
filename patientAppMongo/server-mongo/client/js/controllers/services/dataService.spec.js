// Technique  
describe('patient data service', function () { 

    var patientDataById = {
        "patient_id": 1,
        "name": "Thomas Maestas",
        "age": "83",
        "gender": "male",
        "email": "thomasm1.maestas@gmail.com",
        "height": "60",
        "dob": "09/03/1976",
        "address": "2300 calle de real"
    };
    var dataPatient = {};

    beforeEach(module('app'));
    beforeEach(inject(function (_dataPatient_) {  // name clash of variable and callback argument, ..underscore wrapping is solution!!
        dataPatient = _dataPatient_;
    }));
 
    it('should return patient data by id', function () {
        //   angular.mock.module('omdb');  // moved up to beforeEach 
        expect(dataPatient.find('tt3896198')).toEqual(patientDataById);

    });

});
