angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('DishesService', [function(){
  return {

    all: function() {
      return [
        {
          name: 'Fried Rice',
          price: 50,
          people : [{
            name : "Seph"
          },{
            name : "Ohm"
          }]
        }
      ];
    }
  };
}]);
