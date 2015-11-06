angular.module('app.controllers', [])

.controller('billCtrl', function($scope) {

})

.controller('sharesCtrl', function($scope) {

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



