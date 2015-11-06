angular.module('app.controllers')

.controller('sharesCtrl', function($scope, SharesService) {
	$scope.list = SharesService.all();

	$scope.addPeople = function(people) {

		SharesService.addPeople(angular.copy(people));
		people.name = '';

	};

	$scope.deletePeople = function(index) {
		SharesService.deletePeople(index);
	};
})
