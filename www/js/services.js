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
}])

.service('OptionsService', [function(){

  return {
    option : 'E', //default to equal - 'E'qual, 'S'hare
    set: function(option){
      this.option = option;
    },
    get: function(){
      return this.option;
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
    setOptions: function(option){
      this.option = option;
    },
    all: function() {
      return this.people;
    }
  };
}]);
