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

  $scope.calculateTotalAmount = function(bill) {
    BillService.setBill(angular.copy(bill));
    $scope.bill = BillService.calculateTotalAmount();
  };

  $scope.calculateAmount = function(bill) {
    if($scope.bill.amountType == 0) {
      $scope.calculateGrandTotal(bill);
    }else if($scope.bill.amountType == 1) {
      $scope.calculateTotalAmount(bill);
    }
  };

  $scope.canShowAmount = function(amountType) {
    return $scope.bill.amountType == amountType;
  };
});
