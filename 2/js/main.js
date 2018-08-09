  let money = + prompt("Ваш бюджет на месяц");
  let name = prompt("Название вашего магазина");
  let time = 19, i = 0;
   


 let mainList = {
 		budget: money, 
		shop: name, 
		shopGoods: [],
	    employers: {}, 
		open:true
};

// типы циклов
// for (let i = 0; i < 5; i++)
// while(i < 5)

 do{
 	// ввод типов товара
	let a = prompt("Какой тип товаров будем продавать?");
	

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {

		console.log("Всё верно!");
		mainList.shopGoods[i] = a;
	} else {

	}
	i++
} while(i < 5)

if (time<0) {
	
	console.log("Такого не может быть");
} else if (time > 8 && time <20 ) {
		console.log("Время работать")
		} else if (time < 24) {
			console.log("Уже слишком поздно");
			} else {
				console.log("В сутках только 24 часа"); 	 
			};

alert("Ваш бюджет на день: " + mainList.budget/30);

// console.log(mainList);