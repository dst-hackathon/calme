angular.module('app.services')

.service('HistoryService',
         ['$localStorage', 'BillService', 'SharesService', 'DishesService',
function($localStorage, BillService, SharesService, DishesService){

  var history = $localStorage.get('calme.history.entries') || [];

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
        grandTotal: 100.00,
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

      $localStorage.set('calme.history.entries', history);
    },
    getHistoryByIndex: function(index){
      return history[index];
    },
    loadHistory: function(history) {
      BillService.setBill(history.bill);
      SharesService.setPeople(history.people);
      DishesService.setDishes(history.dishes);
    }

  };
}]);
