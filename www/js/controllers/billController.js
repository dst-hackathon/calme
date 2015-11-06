angular.module('app.controllers')

.controller('billCtrl', function($scope, BillService) {

  $scope.addBill = function(bill) {
  		$scope.bill = BillService.getBill();

		BillService.setBill(angular.copy(bill));
	};
});
