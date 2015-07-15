(function () {

  var CustomersController = function ($scope, customersFactory, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      // take the customersFactory and use to fill the $scope.customers property
      $scope.customers = customersFactory.getCustomers();
    }
    init();

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

  };

  CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);

}());