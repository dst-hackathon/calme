angular.module('app.services')

.service('DishesService', [function(){
  var dishes = [];

  function getDishIndexById(id) {
    var index = dishes.findIndex(function(dish) {
      return dish.id === id;
    });

    return index;
  }

  return {

    new: function() {
      return {
        id: new Date().getTime(),
        name: "",
        people: [],
        new: true
      }
    },

    all: function() {
      return dishes;
    },

    save: function(dish) {
      if (dish.new) {
        dish.new = false;

        dishes.push(dish);
      } else {
        var currentDish = this.get(dish.id);

        angular.copy(dish, currentDish);
      }

    },

    delete: function(dish) {
      var index = getDishIndexById(dish.id);

      if (index >= 0) {
        dishes.splice(index, 1);
      }
    },

    get: function(id) {
      var index = getDishIndexById(id);

      if (index >= 0) {
        return dishes[index];
      }
    }

  };
}])
