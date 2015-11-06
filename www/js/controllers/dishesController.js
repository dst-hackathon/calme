angular.module('app.controllers')

.controller('dishesCtrl', function($scope, DishesService, SharesService) {

  // scope definitions
  angular.extend($scope, {

    currentDish: DishesService.new(),
    dishes: DishesService.all(),
    people: SharesService.all(),

    isSelectedPerson: function(person) {
      var currentPeople = $scope.currentDish.people;

      return currentPeople.some(function(currentPerson) {
        return person.name === currentPerson.name;
      });
    },

    togglePerson: function(event, person) {
      var checkbox = event.target;

      if (checkbox.checked) {
        addPersonToCurrentDish(person);
      } else {
        removePersonFromCurrentDish(person);
      }
    },

    addDish: function() {
      DishesService.save($scope.currentDish);

      $scope.currentDish = DishesService.new();
    },

    removeDish: function(dish) {
      DishesService.delete(dish);
    },

    editDish: function(dish) {
      $scope.currentDish = angular.copy(dish);
    }

  });

  function addPersonToCurrentDish(person) {
    var currentPeople = $scope.currentDish.people;

    currentPeople.push(person);
  }

  function removePersonFromCurrentDish(person) {
    var currentPeople = $scope.currentDish.people,
        currentIndex = currentPeople.findIndex(function(currentPerson) {
          return currentPerson.id === person.id;
        });

    currentPeople.splice(currentIndex, 1);
  }

});
