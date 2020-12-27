const app = angular.module('patientApp', ['ngResource']);

app.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });