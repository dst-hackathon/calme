angular.module('app.services')

.service('HistoryService', [function(){
  var history = [];

  return {

    addDefaultHistory: function(){
      var dHistory = {
        name: 'defaultHistory',
        date: new Date().toString(),
        grandTotal: 100.00
      };
      this.addHistory(dHistory);
    },

    getHistory: function(){
      return history;
    },
    addHistory: function(historyToAdd){
      history.push(historyToAdd);
    }

  };
}]);
