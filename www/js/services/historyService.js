angular.module('app.services')

.service('HistoryService', [function(){
  var history = [];

  var formatDate = function(date){
    return (date.getMonth()+1).toString() + '/'
      + date.getDate().toString() + '/' 
      + date.getFullYear().toString() + '  '
      + date.toLocaleTimeString();
  };

  return {

    addDefaultHistory: function(){
      var dHistory = {
        name: 'defaultHistory',
        date: formatDate(new Date()),
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
