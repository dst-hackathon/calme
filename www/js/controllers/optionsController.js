angular.module('app.controllers')

.controller('optionsCtrl', function($scope, $location, OptionsService) {

	$scope.options = function(selectedOption){
		OptionsService.set(selectedOption);
	}

})
