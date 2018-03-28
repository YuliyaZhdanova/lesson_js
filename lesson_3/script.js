let money, 
	name, 		
	time,
	price  
 
function start() {
	 money = prompt("Ваш бюджет?");

	 while (isNaN(money) || money == "" || money == null) {
		 money = prompt("Ваш бюджет?");
	 }

	 name = prompt("Название вашего магазина?").toUpperCase();
	 time = 21;
}

start();

let mainList = {
	 budget: money,
	 shopName: name,
	 shopGoods: [],
	 employers: {},
	 open: false,
	 discount: false
}


function chooseGoods () {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else { 
	      i = i - 1;
		}
	}
}

chooseGoods(); 

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time >= 8 && time <= 20) {
		console.log('Время работать!');
		} else if (time < 8) {
			console.log('Еще слишком рано!');
			 } else if (time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}		
}
workTime(18);

function daysBudget(budget) {
	var dayBudget = mainList.budget/30;
	alert("Бюджет на один день: " + dayBudget + " руб");
}
daysBudget();

function getDiscont(discount) {
	if (mainList.discount == true) {
		var newPrice = price * 0.8;
		console.log(newPrice);
	}
}
getDiscont();

function hireEmployers() {
	for (let i = 1; i < 5; i++) {
		let employersName = prompt("Имя сотрудника");
		mainList.employers[i] = employersName;
	}
}

console.log(mainList);