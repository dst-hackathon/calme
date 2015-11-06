angular.module('app.controllers', [])

.controller('billCtrl', function($scope) {

  $scope.addBill = function(bill) {
		$scope.bill = angular.copy(bill);
	};
})

.controller('sharesCtrl', function($scope) {
	$scope.list = [];

	$scope.addPeople = function(user) {
		$scope.list.push(angular.copy(user));
		user.name = '';
	};
})

.controller('payCtrl', function($scope) {

})
