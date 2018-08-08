var budget = prompt("Ваш бюджет на месяц");
var shop = prompt("Название вашего магазина");
var shopGoods=[], 
	open, 
	employers={}, 
	mainList;


mainList = {budget: budget, 
			shop:shop, 
			shopGoods:shopGoods,
		    employers:employers, 
			open:true};
// ввод типов товара
shopGoods[0] = prompt("Какой тип товаров будем продавать?");
shopGoods[1] = prompt("Какой тип товаров будем продавать?");
shopGoods[2] = prompt("Какой тип товаров будем продавать?");
alert("Ваш бюджет на день: " + budget/30);

// console.log(typeof(mainList.employers));