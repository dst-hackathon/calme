angular.module('app.controllers')

.controller('historyCtrl', function($scope, HistoryService) {

	HistoryService.addDefaultHistory();

	$scope.historyRecords = HistoryService.getHistory();
	


});
