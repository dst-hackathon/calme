angular.module('app.services')

.service('BillService', [function(){
  var bill = {
    vat: 0,
    serviceCharge: 0
  };

  return {

    setBill: function(bill) {
      bill = bill;
    },
    
    getBill: function() {
      return bill;
    }

  };
}]);