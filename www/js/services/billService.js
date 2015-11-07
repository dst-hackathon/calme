angular.module('app.services')

.service('BillService', [function(){
  var bill = {
    totalAmount: undefined,
    vat: 7,
    vatAmount: 0,
    serviceCharge: 10,
    serviceChargeAmount: 0,
    grandTotal: undefined
  };

  return {

    setBill: function(value) {
      bill = value;
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
      }else {
        bill.totalAmount = undefined;
        bill.vatAmount = 0;
        bill.serviceChargeAmount = 0;
        bill.grandTotal = undefined;
      }
      return bill;
    },

    resetBill: function(){
      bill = {
        totalAmount: undefined,
        vat: 7,
        vatAmount: 0,
        serviceCharge: 10,
        serviceChargeAmount: 0,
        grandTotal: undefined
      }
    },

    calculateTotalAmount: function(){
      if(bill.grandTotal) {
        bill.serviceChargeAmount = (bill.grandTotal * (bill.serviceCharge/100)).toFixed(2);
        var afterVat = Number(bill.grandTotal) - Number(bill.serviceChargeAmount);
        bill.vatAmount =  (afterVat * (bill.vat/100)).toFixed(2);
        bill.totalAmount = Number(afterVat) -Number(bill.vatAmount);
      }else {
        bill.totalAmount = undefined;
        bill.vatAmount = 0;
        bill.serviceChargeAmount = 0;
        bill.grandTotal = undefined;
      }
      return bill;
    }
  };
}]);
