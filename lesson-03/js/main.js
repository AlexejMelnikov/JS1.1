 
  let money, 
  	  name, 
      time;
   
function start() {
   money = + prompt("Ваш бюджет на месяц");

   while(isNaN(money) || money == "" || money == null) {

   		money = + prompt("Ваш бюджет на месяц");

   }
   name = prompt("Название вашего магазина").toUpperCase();

   time = 19
}
start();


 let mainList = {
 		budget: money, 
		shop: name, 
		shopGoods: [],
	    employers: {name:[]}, 
		open: true,
		discount: false
};
calcBudget(money);
function calcBudget(money) {
	mainList.budget = money/30;
	alert("Ваш бюджет на день: " + mainList.budget);
}
// дисконнтная система
function discSystem(price, discount) { 
	
	return (discount) ? price*0.8 : price ;
}
hiringEmployers();
function hiringEmployers() {
	for(let i =1; i < 5; i++) {
		 mainList.employers.name.push( i + " - "+ prompt("Введите имя сотрудника"));
	}
}
// типы циклов
// for (let i = 0; i < 5; i++)
// while(i < 5)
function chooseGoods(){
 for (let i = 0; i < 5; i++) {
 	// ввод типов товара
	let a = prompt("Какой тип товаров будем продавать?");
	

	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {

		console.log("Всё верно!");
		mainList.shopGoods[i] = a;
	} else {

	}
	i++
}
}

chooseGoods();
workTime(18);
function workTime(time) {
   if (time<0) {
	
     	console.log("Такого не может быть");
   } else if (time > 8 && time <20 ) {
     	console.log("Время работать")
    } else if (time < 24) {
     	console.log("Уже слишком поздно");
    	} else {
     	console.log("В сутках только 24 часа"); 	 
    	};
}
 console.log(discSystem(10));

