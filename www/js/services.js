angular.module('app.services', [])

.factory('BlankFactory', [function(){

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
