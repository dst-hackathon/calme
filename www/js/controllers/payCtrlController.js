angular.module('app.controllers')

.controller('payCtrl', function($scope, DishesService, SharesService, BillService, OptionsService, BillService) {
	//mockPeople();
	var $expenseData = DishesService.all();
	//var $expenseData = mockExpense();
	var $people = SharesService.all();
	var $bill = BillService.getBill();
	var $totalValue = 0;
	var $totalDetail = [];
	
	$scope.people = getSummaryData();
	$scope.totalValue = $totalValue; 
	$scope.totalDetail = $totalDetail;
	$scope.bill = $bill;
	
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
		var name;
		for( index in  $people) {
			name= $people[index].name
			people[name] = new plopleBill(name);
		}
		return people;
	}
	
	function calculateBill(people) {
		var currentList;
		var price;
		var name;
		var vat = ($bill.vat == 0)? 1 : (1+($bill.vat/100));
		var serviceCharge = ($bill.serviceCharge == 0)? 1: (1+($bill.serviceCharge/100));
		
		if (OptionsService.get() == "E") {
			price = $bill.grandTotal/$people.length;
			for(i in people) {
				people[i].addDish("All menu", price, price);
			}
		} else {
			for(index in $expenseData) {
				currentList = $expenseData[index];
				price = currentList.price/currentList.people.length;
				for(i in currentList.people) {
					name = currentList.people[i].name;
					people[name].addDish(currentList.name, (price*vat*serviceCharge),price);
				}
			}
		}
	}
	
	function viewDetail($event, team) {
		angular.element(document.getElementsByClassName("detailPanel")).addClass("hidden");
		angular.element($event.currentTarget).next().toggleClass("hidden");
	}
	
	function mockPeople() {
		SharesService.addPeople({name:"Seph"});
		SharesService.addPeople({name:"Ohm"});
		SharesService.addPeople({name:"Sam"});
	}
	
	function mockExpense() {
		return [{
					name: "Noodle",
					people: [{name:"Sam"},{name:"Seph"},{name:"Ohm"}],
					price: 2000,
					new: true},
				{
					name: "Fire Rice",
					people: [{name:"Sam"},{name:"Seph"}],
					price: 4000,
					new: true},
				{
					name: "Papaya salad",
					people: [{name:"Seph"},{name:"Ohm"}],
					price: 5500,
					new: true}
				];
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
				addDish: function(name, price, oriPrice) {
					dish.push({ name:name, price: price, oriPrice: oriPrice});
					total += price;
				}
			};
}

