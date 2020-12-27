 


describe('PatientsController', function() {
    var scope, patientsController;

    beforeEach(inject(function ($rootScope, $controller) { 
        scope = $rootScope.$new();

        patientsController = function() {
            return $controller('PatientsController', {
                '$scope': scope
            });
        };
    }));

    it('should have a method to check if the path is active', function() {
        // tests
    });
});