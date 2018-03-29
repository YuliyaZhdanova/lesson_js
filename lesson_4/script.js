let money, 
	name, 		
	time,
	price;  
 
function start() {
	 money = prompt("Ваш бюджет?", "");

	 while (isNaN(money) || money == "" || money == null) {
		 money = prompt("Ваш бюджет?", "");
	 }

	 name = prompt("Название вашего магазина?", "").toUpperCase();
	 time = 21;
}

start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods () {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
		
			if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else { 
		      i = i - 1;
			}
		}
	},

 	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time >= 8 && time <= 20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time < 8) {
				console.log('Еще слишком рано!');
				 } else if (time < 24) {
					console.log('Уже слишком поздно!');
					} else {
						console.log('В сутках только 24 часа!');
						}		
	},
	daysBudget: function dayBudget(budget) {
		alert("Бюджет на один день: " + mainList.budget/30 + " руб");
	},
	makeDiscont: function makeDiscont(discount) {
		if (mainList.discount == true) {
			price = price * 0.8; 
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 5; i++) {
			let employersName = prompt("Имя сотрудника", "");
			mainList.employers[i] = employersName;
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i <1; i++) {
		 var items = prompt("Перечислите через запятую товары", "");
			if((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
				console.log('Все верно!'); 
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите, еще ",""));
				mainList.shopItems.sort();
			} else { 
		      i = i - 1;
			}
		}
		console.log("У нас вы можете купить:");
		 mainList.shopItems.forEach(function(item, i, arr){
		 	i = i + 1;
			console.log( i + ": " + item);
		})

	}

};
console.log("Наш магазин включает в себя: ");
for(let key in mainList) {
	console.log("- " + key + ";");
  }
