angular.module('app.controllers', [])

.controller('billCtrl', function($scope) {

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

.controller('dishesCtrl', function($scope, DishesService) {

  $scope.people = [
    { name: 'Ohm' },
    { name: 'Seph' }
  ];

  $scope.dishes = DishesService.all();

})

.controller('payCtrl', function($scope) {

})



