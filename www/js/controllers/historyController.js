angular.module('app.controllers')

.controller('historyCtrl', function($scope, $state, HistoryService, BillService, SharesService, DishesService) {

	$scope.historyRecords = HistoryService.getHistory();

    $scope.loadTransaction = function(record) {
      HistoryService.loadHistory(record);

      $state.go('pay');
    };

    $scope.newTransaction = function() {
      BillService.resetBill();
      SharesService.clear();
      DishesService.clear();
    };

});
