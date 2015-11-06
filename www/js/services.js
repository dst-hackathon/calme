angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

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
    }

  };
}])

.service('SharesService', [function(){

  return {
    people : [],
    deletePeople: function(index){
      this.people.splice(index, 1);
    },
    addPeople: function(people){
      this.people.push(people);
    },
    all: function() {
      return this.people;
    }
  };
}]);
