angular.module('app.controllers', [])

.controller('sharesCtrl', function($scope) {
	$scope.list = [];

	$scope.addPeople = function(people) {
		if(people.name) {
			$scope.list.push(angular.copy(people));
			people.name = '';
		}
	};

	$scope.deletePeople = function(index) {
		$scope.list.splice(index, 1);
	};
})
