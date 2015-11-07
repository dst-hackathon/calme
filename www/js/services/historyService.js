angular.module('app.services')

.service('HistoryService', [function(){
  var history = [];

  var getDate = function(){
    var date = new Date();
    return (date.getMonth()+1).toString() + '/'
      + date.getDate().toString() + '/'
      + date.getFullYear().toString() + '  '
      + date.toLocaleTimeString();
  };

  return {

    addDefaultHistory: function(){
      var dHistory = {
        name: 'defaultHistory',
        date: getDate(),
        grandTotal: 100.00
        bill: null,
        dishes: null,
        people: null
      };
      this.addHistory(dHistory);
    },

    getHistory: function(){
      return history;
    },
    addHistory: function(historyToAdd){
      history.push(historyToAdd);
    },
    getHistoryByIndex: function(index){
      return history[index];
    }

  };
}]);
