angular.module('app.services')

.service('BillService', [function(){
  var bill = {};

  return {

    setBill: function(bill) {
      this.bill = bill;
    },
    
    getBill: function() {
      return this.bill;
    }

  };
}]);