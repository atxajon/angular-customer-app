(function () {

  var CustomersController = function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [{
      joined: '2000-12-02',
      name: 'John',
      city: 'Chandler',
      orderTotal: 9.9956
    }, {
      joined: '1965-01-25',
      name: 'Zed',
      city: 'Las Vegas',
      orderTotal: 19.99
    }, {
      joined: '1944-06-15',
      name: 'Tina',
      city: 'New York',
      orderTotal: 44.99
    }, {
      joined: '1995-03-28',
      name: 'Dave',
      city: 'Seattle',
      orderTotal: 101.50
    }];
    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ['$scope']; // needed to avoid angular breaking when minifying js; order matters and needs to go right after the var declaration

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);

}());