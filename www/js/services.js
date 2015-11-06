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
