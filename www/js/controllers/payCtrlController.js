angular.module('app.controllers')

.controller('payCtrl', function($scope, DishesService, SharesService, BillService, OptionsService, BillService, HistoryService) {
	
	if( 1 == 2 || HistoryService.getHistory.lenght != 0 ) {
		var $expenseData = DishesService.all();
		var $people = SharesService.all();
		var $bill = BillService.getBill();	
	} else {
		var $expenseData = DishesService.all();
		var $people = SharesService.all();
		var $bill = BillService.getBill();	
	}
	var $totalValue = 0;
	var $totalDetail = [];

	$scope.people = getSummaryData();
	$scope.totalValue = $totalValue;
	$scope.totalDetail = $totalDetail;
	$scope.bill = $bill;
	
	$scope.view = function($event, team) {
		viewDetail($event, team);
	}
	
	$scope.clear = function($event, team) {
		
	}

	$scope.saveHistory = function(){
		HistoryService.addHistory(
			{
				name: 'defaultHistory',
				date: new Date().toString(),
				grandTotal: angular.copy($scope.totalValue),
				bill: angular.copy(BillService.getBill()),
				dishes: angular.copy(DishesService.all()),
				people: SharesService.all()
			}
		);
	};

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
				people[i].addDish("All Menu", price, price);
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
