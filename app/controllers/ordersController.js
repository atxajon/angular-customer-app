(function () {

  var OrdersController = function ($scope, $routeParams, customersFactory) {
    var customerId = $routeParams.customerId; //customerId property gets picked up from the arg defined on apps.js: .when('/orders/:customerId', you can give them any name but they need to match up

    $scope.customer = null;

    function init() {
      // Search the customers for the customerId
      $scope.customer = customersFactory.getCustomer(customerId)
    }

    init();
  };

  OrdersController.$inject = ['$scope','$routeParams','customersFactory'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);

}());