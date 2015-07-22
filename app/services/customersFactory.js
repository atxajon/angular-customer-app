(function () {
  // create our factory object
  var customerFactory = function () {
    // expose our factory object
    var factory = {};
    factory.getCustomers = function() {
      return customers;
    };

    factory.getCustomer = function(customerId) {
      // Search the customers for the customerId
      for (var i = 0; i<customers.length; i++) {
        if (customers[i].id === parseInt(customerId)) {
          return customers[i];
        }
      }
      return {}; // if we dont find the customer we return an empty object (or null)
    };

    return factory;
  };

  // register it with angularjs
  angular.module('customersApp').factory('customersFactory', customerFactory);

}());