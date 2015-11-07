angular.module('app.controllers')

.controller('dishesCtrl', function($scope, $state, DishesService, SharesService, BillService, ionicToast) {

  function init() {
    calculateLeftAmount();
  }

  // scope definitions
  angular.extend($scope, {

    currentDish: DishesService.new(),
    dishes: DishesService.all(),
    people: SharesService.all(),
    billTotal: 0,

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

      calculateLeftAmount();
    },

    removeDish: function(dish) {
      DishesService.delete(dish);
      $scope.currentDish = DishesService.new();
      calculateLeftAmount();
    },

    editDish: function(dish) {
      $scope.currentDish = angular.copy(dish);
      calculateLeftAmount();
    },

    validateNext : function() {
      if( $scope.billTotal == 0  ) {
        $state.go("pay");
      } else {
        ionicToast.show('You have not split all dishes. Please make it until amount goes zero', 'top', false, 2000);
      }
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

  function calculateLeftAmount() {
    var billTotal = BillService.getBill().totalAmount;
    var totalShare = 0;

    $scope.dishes.forEach(function(dish){
      totalShare += dish.price;
    })

    $scope.billTotal = billTotal - totalShare;
  }

  init();

});
