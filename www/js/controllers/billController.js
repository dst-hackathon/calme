angular.module('app.controllers')

.controller('billCtrl', function($scope, BillService) {

  $scope.bill = BillService.getBill();

  $scope.addBill = function(bill) {
		BillService.setBill(angular.copy(bill));
	};

  $scope.calculateGrandTotal = function(bill) {
  	BillService.setBill(angular.copy(bill));
    $scope.bill = BillService.calculateGrandTotal();
	};

});
