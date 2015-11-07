angular.module('app.services')

.service('HistoryService',
         ['$localStorage', 'BillService', 'SharesService', 'DishesService',
  function($localStorage, BillService, SharesService, DishesService){

  var historyEntries = $localStorage.get('calme.history.entries') || [];
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
        grandTotal: 100.00,
        bill: null,
        dishes: null,
        people: null
      };
      this.addHistory(dHistory);
    },

    getHistory: function(){
      return historyEntries;
    },

    addHistory: function(historyToAdd){
      var historyEntries = this.getHistory();

      historyEntries.push(historyToAdd);

      $localStorage.set('calme.history.entries', historyEntries);
    },

    loadHistory: function(history) {
      BillService.setBill(history.bill);
      SharesService.setPeople(history.people);
      DishesService.setDishes(history.dishes);
    }

  };
}]);
