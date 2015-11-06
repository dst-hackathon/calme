angular.module('app.controllers')

.controller('sharesCtrl', function($scope, SharesService, ionicToast) {
	$scope.list = SharesService.all();

	$scope.addPeople = function(people) {
		if(people.name){
			var tempPeople = angular.copy(people);
			tempPeople.id = new Date().getTime();
			SharesService.addPeople(tempPeople);
			people.name = '';
		}else{
				ionicToast.show('Please add peoples!', 'top', false, 2500);
		}
	};

	$scope.deletePeople = function(index) {
		SharesService.deletePeople(index);
	};

	$scope.canShow = function() {
		return $scope.list.length > 0;
	};
})
