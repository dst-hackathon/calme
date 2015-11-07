angular.module('app.controllers')

.controller('billCtrl', function($scope, BillService, ionicToast) {

  $scope.bill = BillService.getBill();
  $scope.bill.amountType = 0;

  $scope.addBill = function(bill, event) {

    var tempBill = angular.copy(bill);

    if(tempBill.totalAmount == undefined || isNaN(tempBill.totalAmount) || tempBill.totalAmount <= 0) {
			ionicToast.show('The amount is invalid.', 'top', false, 2500);
			event.stopPropagation();
			event.preventDefault();
		} else{
		    BillService.setBill(angular.copy(bill));
    }
	};

  $scope.calculateGrandTotal = function(bill) {
  	BillService.setBill(angular.copy(bill));
    $scope.bill = BillService.calculateGrandTotal();
  };

<<<<<<< HEAD
  $scope.calculateTotalAmount = function(bill) {
    BillService.setBill(angular.copy(bill));
    $scope.bill = BillService.calculateTotalAmount();
  };

  $scope.canShowAmount = function(amountType) {
    return $scope.bill.amountType == amountType;
  };
=======
>>>>>>> 05ee1d6c2b7e0ef9333d19def2cd751b180b39be
});
