angular.module('app.services')

.service('BillService', [function(){
  var bill = {
    totalAmount: undefined,
    vat: 7,
    vatAmount: 0,
    serviceCharge: 10,
    serviceChargeAmount: 0
  };

  return {

    setBill: function(bill) {
      bill = bill;
    },

    getBill: function() {
      return bill;
    },

    calculateGrandTotal: function(){
      if(bill.totalAmount) {
        bill.vatAmount = (bill.totalAmount * (bill.vat/100)).toFixed(2);
        var afterVat = Number(bill.totalAmount) + Number(bill.vatAmount);

        bill.serviceChargeAmount = (afterVat * (bill.serviceCharge/100)).toFixed(2);
        var afterServiceCharge = Number(afterVat) + Number(bill.serviceChargeAmount);

        bill.grandTotal = afterServiceCharge;
      }
      return bill;
    }

  };
}]);
