angular.module('app.services')

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
    },
    clear: function() {
    	this.people = [];
    },
    setPeople: function(people) {
      this.people = people;
    }
  };
}]);
