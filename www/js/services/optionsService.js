angular.module('app.services')

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
}]);
