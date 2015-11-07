angular.module('app.controllers')

.controller('billCtrl', function($scope, BillService, ionicToast) {

  $scope.bill = BillService.getBill();

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

});
