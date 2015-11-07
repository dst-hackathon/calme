angular.module('app.controllers')

.controller('sharesCtrl', function($scope, SharesService, ionicToast) {
	$scope.list = SharesService.all();

	$scope.addPeople = function(people) {
		if(people != undefined && people.name != ''){
			var tempPeople = angular.copy(people);
			var isValidPeople = true;

			for(var i=0; i < $scope.list.length; i++) {
				var existingPeople = $scope.list[i];
				if(tempPeople.name == existingPeople.name) {
					ionicToast.show('Duplicated with existing people', 'top', false, 2500);
					isValidPeople = false;
					break;
				}
    		}

    		if(isValidPeople) {
				tempPeople.id = new Date().getTime();
				SharesService.addPeople(tempPeople);
				people.name = '';
			}
		}else{
			ionicToast.show('Please add people!', 'top', false, 2500);
		}
	};

	$scope.deletePeople = function(index) {
		SharesService.deletePeople(index);
	};

	$scope.validatePeople = function(event) {
		if($scope.list.length <= 1) {
			ionicToast.show('Please add at least two people', 'top', false, 2500);
			event.stopPropagation();
			event.preventDefault();
		}
	};

	$scope.canShow = function() {
		return $scope.list.length > 0;
	};

	$scope.shouldShowDelete = false;
 	$scope.shouldShowReorder = false;
 	$scope.listCanSwipe = true
})
