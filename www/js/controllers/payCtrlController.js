angular.module('app.controllers')

.controller('payCtrl', function($scope) {
	$scope.people = getPeople();
	
	$scope.view = function($event, team) {
		viewDetail($event, team);
	}
	
	function getPeople() {
		var people = [
		              	{name:"test1", payAmount: "4000", id: "1", detail: "Details"},
		              	{name:"test2", payAmount: "2000", id: "10", detail: "Details"},
		              	{name:"test3", payAmount: "5000", id: "20", detail: "Details"},
		             ];
		return people;
	}
	
	function viewDetail($event, team) {
		angular.element(document.getElementsByClassName("detailPanel"));
		angular.element($event.currentTarget).next().toggleClass("hidden");
	}
});

