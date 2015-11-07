angular.module('app.controllers')

.controller('historyCtrl', function($scope, HistoryService) {

	HistoryService.addDefaultHistory();
		HistoryService.addDefaultHistory();
			HistoryService.addDefaultHistory();

	$scope.historyRecords = HistoryService.getHistory();
  
});
