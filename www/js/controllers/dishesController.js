angular.module('app.controllers')

.controller('dishesCtrl', function($scope, DishesService) {

  $scope.currentDish = DishesService.new();

  $scope.dishes = DishesService.all();
  $scope.people = [
    { name: 'Ohm' },
    { name: 'Seph' }
  ];

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
      var position = currentPeople.indexOf(person);

      currentPeople.splice(position, 1);
    }
  };

  $scope.addDish = function() {
    DishesService.add($scope.currentDish);

    $scope.currentDish = DishesService.new();
  };

});
