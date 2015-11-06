angular.module('app.controllers')

.controller('dishesCtrl', function($scope, DishesService, SharesService) {

  $scope.currentDish = DishesService.new();

  $scope.dishes = DishesService.all();
  $scope.people = SharesService.all();

  $scope.isSelectedPerson = function(person) {
    var currentPeople = $scope.currentDish.people;

    return currentPeople.some(function(currentPerson) {
      return person.name === currentPerson.name;
    })
  };

  $scope.togglePerson = function(event, person) {
    var checkbox = event.target,
        currentPeople = $scope.currentDish.people;

    if (checkbox.checked) {
      currentPeople.push(person);
    } else {
      var currentIndex = currentPeople.findIndex(function(currentPerson) {
          return currentPerson.id === person.id;
        });

      currentPeople.splice(currentIndex, 1);
    }
  };

  $scope.addDish = function() {
    DishesService.save($scope.currentDish);

    $scope.currentDish = DishesService.new();
  };

  $scope.removeDish = function(dish) {
    DishesService.delete(dish);
  };

  $scope.editDish = function(dish) {
    $scope.currentDish = angular.copy(dish);
  };

});
