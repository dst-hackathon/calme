angular.module('app.controllers')

.controller('optionsCtrl', function($scope, $location) {

	$scope.options = function(selectedOption){
		console.log('select option: ' + selectedOption);
		$location.url('/pay');
	}

})
