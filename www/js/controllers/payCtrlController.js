angular.module('app.controllers')

.controller('payCtrl', function($scope, DishesService, SharesService, BillService) {
	var $expenseData = DishesService.all();
	console.log($expenseData);
	//mockPeople();
	var $people = SharesService.all();
	var $totalValue = 0;
	var $totalDetail = [];
	
	$scope.people = getSummaryData();
	$scope.totalValue = $totalValue; 
	$scope.totalDetail = $totalDetail;
	
	$scope.view = function($event, team) {
		viewDetail($event, team);
	}
	
	function getSummaryData() {
		var people = createPeople();
		var index = 0;
		var result = [];
		calculateBill(people);
		for(i in people) {
			$totalValue += people[i].getPrice();
			result.push(people[i].getSummary());
			index++;
		}
		return result;
	}
	
	function createPeople() {
		var people = {};
		for( index in  $people) {
			people[$people[index].name] = new plopleBill($people[index].name);
		}
		return people;
	}
	
	function calculateBill(people) {
		var currentList;
		var price;
		var name;
		for(index in $expenseData) {
			currentList = $expenseData[index];
			console.log(currentList);
			price = currentList.price/currentList.people.length;
			for(i in currentList.people) {
				name = currentList.people[i].name;
				people[name].addDish(currentList.name, price);
			}
		}
	}
	
	function viewDetail($event, team) {
		angular.element(document.getElementsByClassName("detailPanel")).addClass("hidden");
		angular.element($event.currentTarget).next().toggleClass("hidden");
	}
	
	function mockPeople() {
		SharesService.addPeople("Seph");
		SharesService.addPeople("Ohm");
		SharesService.addPeople("Sm");
	}
	
});


var plopleBill = function(name) {
	var name = name;
	var dish = [];
	var total = 0;
	return {	getPrice: function() {
					return total;
				},
				getSummary: function() {
					if( dish.length == 0 )
						return {name: name, payAmount: total, detail: [{name: "No record...", price: ""}]};
					else 
						return {name: name, payAmount: total, detail: dish};
				},
				addDish: function(name, price) {
					dish.push({ name:name, price: price });
					total += parseInt(price);
				}
			};
}

