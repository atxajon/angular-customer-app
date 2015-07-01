(function() {

  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'CustomersController',
        templateUrl: 'app/views/customers.html',
      })
      .otherwise({redirectTo: '/'});
  });

}());