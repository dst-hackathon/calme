angular.module('app.controllers', [])

.controller('billCtrl', function($scope) {

  $scope.addBill = function(bill) {
		$scope.bill = angular.copy(bill);
	};
})

.controller('payCtrl', function($scope) {

})
