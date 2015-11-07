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

      var validation = this.validate(dish);
      if (!validation.valid) {
        return validation;
      }

      if (dish.new) {
        dish.new = false;

        dishes.push(dish);
      } else {
        var currentDish = this.get(dish.id);

        angular.copy(dish, currentDish);
      }

      return validation;

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
    },

    validate: function(dish) {
      var messages = [];

      if (!dish.name || !dish.name.trim()) {
        messages.push('Dish name is required');
      }

      if (dish.price === null || dish.price === undefined) {
        messages.push('Dish price is required');
      }

      if (dish.price <= 0) {
        messages.push('Dish price must be positive number');
      }

      if (dish.people.length === 0) {
        messages.push('At least 1 person need to be assigned to this dish');
      }

      return {
        valid: messages.length === 0,
        messages: messages
      };
    },
    
    clear: function() {
    	dishes = [];
    }

  };
}])
