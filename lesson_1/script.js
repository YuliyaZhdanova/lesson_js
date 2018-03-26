var budget = prompt("Ваш бюджет");
var shopName = prompt('Название вашего магазина?');

console.log(budget);
console.log(shopName);

var shopGoods = [];
var employers = {};
var open;

mainList = {
 budget,
 shopName,
 shopGoods,
 employers,
 open
}

for (var i = 0; i < 3; i++) {
	shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}

console.log(shopGoods[1]);

alert('Бюджет на один день: ' + budget/30 + ' руб');