angular.module('app.controllers', [])

.controller('billCtrl', function($scope) {

  $scope.addBill = function(bill) {
		$scope.bill = angular.copy(bill);
	};
})

.controller('sharesCtrl', function($scope) {
	$scope.list = [];

	$scope.addPeople = function(people) {
		$scope.list.push(angular.copy(people));
		people.name = '';
	};

	$scope.deletePeople = function(index) {
		$scope.list.splice(index, 1);
	};
})

.controller('payCtrl', function($scope) {

})
