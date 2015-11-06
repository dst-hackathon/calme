angular.module('app.controllers')

.controller('dishesCtrl', function($scope, DishesService) {

  $scope.people = [
    { name: 'Ohm' },
    { name: 'Seph' }
  ];

  $scope.dishes = DishesService.all();

});
