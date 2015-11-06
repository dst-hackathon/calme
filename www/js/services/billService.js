angular.module('app.services')

.service('BillService', [function(){
  var bill = {
    totalAmount: undefined,
    vat: 0,
    serviceCharge: 0
  };

  return {

    setBill: function(bill) {
      bill = bill;
    },

    getBill: function() {
      return bill;
    },

    calculateGrandTotal: function(){
      var afterVat = bill.totalAmount + (bill.totalAmount * (bill.vat/100));
      var afterServiceCharge = afterVat + (afterVat * (bill.serviceCharge/100));

      bill.grandTotal = afterServiceCharge;
      return bill;
    }

  };
}]);
