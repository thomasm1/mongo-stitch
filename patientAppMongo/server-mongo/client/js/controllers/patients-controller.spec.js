describe('patient data service', function() { 

    beforeEach(module('patientApp'));

    describe('patient static data', function() {

        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('patientsCtrl', {$scope:scope});
        }));

        it ('should init title in scope', function() {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe("Patient App");  
        }) 

    })
 
}); 