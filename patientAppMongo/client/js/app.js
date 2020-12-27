(function() {

    var app = angular.module('app', [   'ngRoute', 'ngCookies', 'ngResource']);

    app.provider('patients', function () {

        var providerPatients = 'providerPatients' 
        console.log(providerPatients);

        var includeVersionInTitle = true;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var providerGet = 'providerGet' 
            console.log(providerGet);

            var appName = 'Patient Directory';
            var version = ' 1.0';

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = 'Two-page Angular 1.7 application  with following functionality Page 1 – List all patients using patients name; Page 2 - Lists patient details: name, age, birthday, email, height; featuring Create-Remove-Update-Delete testing. Unit Testing using Karma-Jasmine; End-to-End Testing using Protractor-Jasmine';

            return {
                appName: appName,
                appDesc: appDesc
            };
        };

    });

    app.config(['patientsProvider', '$routeProvider', '$logProvider', '$httpProvider', '$provide', function (patientsProvider, $routeProvider, $logProvider, $httpProvider, $provide) {
       
        // .config accepts 2 of 5 types;  only constants and providers;
        $provide.decorator('$log', ['$delegate', 'patients', logDecorator]);

        var provideDecoratorLog = 'provideDecoratorLog';
        console.log(provideDecoratorLog);

        patientsProvider.setIncludeVersionInTitle(true);
        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push('patientLoggerInterceptor');

        var configPatientsProvider = 'configPatientsProvider' 
        console.log(configPatientsProvider);

        $routeProvider
            .when('/', {
                templateUrl: '/js/templates/patients.html',
                controller: 'PatientsController',
                controllerAs: 'patients'
            })
            .when('/Login', {
                templateUrl: '/js/templates/login.html',
                controller: 'PatientsController',
                controllerAs: 'patients'
            })
            .when('/AddPatient', {
                templateUrl: '/js/templates/addPatient.html',
                controller: 'AddPatientController',
                controllerAs: 'patientAdder'
            })
            .when('/EditPatient/:patientID', {
                templateUrl: '/js/templates/editPatient.html',
                controller: 'EditPatientController',
                controllerAs: 'patientEditor'
            })
            .otherwise('/');

    }]);

    app.run(['$rootScope', function($rootScope) {
        //.run accepts 4 of 5; does not accespt providers
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {

            console.log('$rootScope: successfully changed routes'); 
            console.log(event);
            console.log(current); 
            var runVar = 'runVar'
            console.log(runVar);
        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {

            console.log('$rootScope: error changing routes');

            console.log(event);
            console.log(current);
            previous? console.log(previous): null;
            console.log(rejection);

        });

    }]);

    function logDecorator($delegate, patients) {

        function log(message) {
            message += ' - ' + new Date() + ' (' + patients.appName + ')';
            $delegate.log(message);
        }

        function info(message) {
            $delegate.info(message);
        }

        function warn(message) {
            $delegate.warn(message);
        }

        function error(message) {
            $delegate.error(message);
        }

        function debug(message) {
            $delegate.debug(message);
        }

        function awesome(message) {
            message = '$rootScope: Awesome!!! - ' + message;
            $delegate.debug(message);
        }

        return {
            log: log,
            info: info,
            warn: warn,
            error: error,
            debug: debug,
            awesome: awesome
        };

    }

}());