angular.module('app.controllers')

.controller('billCtrl', function($scope, BillService) {
 	$scope.bill = {
 		vat: 0,
 		serviceCharge: 0
 	};

  	$scope.addBill = function(bill) {
  		$scope.bill = BillService.getBill();

		BillService.setBill(angular.copy(bill));
	};
});
