 
  let money, 
  	  name, 
      time;
   
function start() {
   money = + prompt("Ваш бюджет на месяц", "");

   while(isNaN(money) || money == "" || money == null) {

   		money = + prompt("Ваш бюджет на месяц", "");

   }
   name = prompt("Название вашего магазина", "").toUpperCase();

   time = 19
}
// start();


 let mainList = {
 		budget: money, 
		shop: name, 
		shopGoods: [],
	    employers: {name:[]}, 
	    shopItems: [],
		open: true,
		discount: false,
		chooseGoods:function chooseGoods(){
		 for (let i = 0; i < 5; i++) {
		 	// ввод типов товара
			let a = prompt("Какой тип товаров будем продавать?", "");
			

			if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
				// console.log("Всё верно!");
				mainList.shopGoods.push(a);
			} else {
					i--;
				}
			}
		},
		calcBudget: function calcBudget(money) {
					mainList.budget = money/30;
					alert("Ваш бюджет на день: " + mainList.budget);
				},
		discSystem: function discSystem(price) { 
					return (mainList.discount) ? price*0.8 : price ;
					},
		hiringEmployers: function hiringEmployers() {
					let a
					// let a = prompt("Введите имя сотрудника");
				 	for(let i = 0; i < 4; i++) {
				 		a = prompt("Введите имя сотрудника", "");
				 	   if(typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50 ) {
					 	mainList.employers.name.push( i + " - "+ a );
					} else {
						i--;
						}
					}
			},
		workTime: function workTime(time) {
			   if (time<0) {
				
			     	console.log("Такого не может быть");
			   } else if (time > 8 && time <20 ) {
			     	console.log("Время работать")
			     	mainList.open = true;
			    } else if (time < 24) {
			     	console.log("Уже слишком поздно");
			    	} else {
			     	console.log("В сутках только 24 часа"); 	 
			    	}
			},
			chooseShopItems: function chooseShopItems() {

				let items = prompt("Перечислите через запятую ваши товары", "");
				if(typeof(items) === 'string' && typeof(items) !== null && items != ''){
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt("Подождите ещё", ""));
				mainList.shopItems.forEach( function(elem, i) {
					document.write("У нас вы мжете купить : " + elem + "<br>");
				});

			} 
				mainList.shopItems.sort();
			}



};
for( let key in mainList) {
	console.log(mainList[key]);
				}
// calcBudget(money);

// дисконнтная система
// hiringEmployers();
// console.log(mainList.employers.name);


// chooseGoods();
// conso le.log(mainList.shopGoods);
// workTime(18);

console.log(mainList);

