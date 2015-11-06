angular.module('app.controllers')

.controller('optionsCtrl', function($scope, $location, OptionsService) {

	$scope.options = function(selectedOption){
		OptionsService.set(selectedOption);
		
		console.log('select option: ' + OptionsService.get());

		$location.url('/pay');
	}

})
