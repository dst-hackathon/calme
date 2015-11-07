angular.module('app.controllers')

.controller('dishesCtrl', function($scope, $state, DishesService, SharesService, BillService, ionicToast, $ionicScrollDelegate) {

  function init() {

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
        var validation = DishesService.save($scope.currentDish);

        if (!validation.valid) {
          return showToast(validation.messages[0]);
        }

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

        $ionicScrollDelegate.scrollTop();
      },

      validateNext : function() {
        if( $scope.billTotal == 0  ) {
          $state.go("pay");
        } else if ( $scope.billTotal < 0 ) {
          showToast('You have split overprice dishes. Please review your items.');
        }else {
          showToast('You have not split all dishes. Please make it until amount goes zero.');
        }
      }
    });

    calculateLeftAmount();
  }

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
      totalShare += Number(dish.price);
    })

    var totalAmountLeft = billTotal - totalShare;

    $scope.billTotal = totalAmountLeft;

    angular.element(document.getElementsByClassName("totalAmount")).toggleClass("assertive", (totalAmountLeft < 0))
  }

  function showToast(message) {
    ionicToast.show(message, 'top', false, 2500);
  }

  init();

});
