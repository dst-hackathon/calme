angular.module('app.services')

.service('DishesService', [function(){
  var dishes = [];

  return {

    new: function() {
      return {
        name: "",
        people: []
      }
    },

    all: function() {
      return dishes;
    },

    add: function(dish) {
      dishes.push(dish);
    },

    delete: function(dish) {
      var index = dishes.indexOf(dish);

      if (index >= 0) {
        dishes.splice(index, 1);
      }
    }

  };
}])
