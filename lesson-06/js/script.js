let open = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],
    goods_item =document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2], 
    employers_btn = document.getElementsByTagName('button')[3],
    choose_item =document.querySelector('.choose-item'),
    count_budget_value = document.querySelector('.count-budget-value'),
    time_value = document.querySelector('.time-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');
    // console.log(btnGoodsItem);
  let money, 
  	  price;

  let mainList = {
 		budget: money, 
		shop: name, 
		shopGoods: [],
	    employers: {name:[]}, 
	    shopItems: [],
		open: true,
		discount: false,
		discSystem: function(price) { 
					return (mainList.discount) ? price*0.8 : price ;
					}};

		window.onload = mainList.discount = confirm("У вас есть скидка?");
      open.addEventListener("click", () => {
      	   money = + prompt("Ваш бюджет на месяц", "");

  	 while(isNaN(money) || money == "" || money == null) {
   		money = + prompt("Ваш бюджет на месяц", "");
   }

   budget_value.textContent = money;
   name_value.textContent = prompt("Название вашего магазина", "").toUpperCase();

      });
   
      goods_btn.addEventListener("click", () =>{

 		 for (let i = 0; i < goods_item.length ; i++) {
		 	// ввод типов товара
			let a = goods_item[i].value;
			

			if ((typeof(a)) === 'string' && (typeof(a)) !== null &&  a.length < 50 ) {
				console.log("Всё верно!");
				mainList.shopGoods.push(a);
				goods_value.textContent = mainList.shopGoods;
			} else {
					i--;
				}
			}
		
      });

            choose_item.addEventListener('change',() =>{
      	let items = choose_item.value;
				if(isNaN(items) && items != "" ){
				mainList.shopItems = items.split(",");
				mainList.shopItems.sort();

				items_value.textContent = mainList.shopItems; 
								
			} 
      });



      time_value.addEventListener('change', () =>{
      	let time = time_value.value;
      	if (time<0) {
				   	console.log("Такого не может быть");
			     	mainList.open = false;
			   } else if (time > 8 && time <20 ) {
			     	console.log("Время работать");
			     	mainList.open = true;
			    } else if (time < 24) {
			     	console.log("Уже слишком поздно");
			     	mainList.open = false;
			    	} else {
			     	console.log("В сутках только 24 часа"); 
			     	mainList.open = false;	 
			    	}
			    if(mainList.open == true) {
			    	isopen_value.style.backgroundColor = 'green';
			    } else {
			    	isopen_value.style.backgroundColor = 'red';
			    }
      });
      budget_btn.addEventListener('click', () =>{ 
      				
					count_budget_value.value = money / 30;

      });

      employers_btn.addEventListener("click", () =>{
      				for(let i = 0; i < hire_employers_item.length; i++) {
				 	let name = hire_employers_item[i].value;
				 	
				 	mainList.employers.name.push( i + " - "+ name );

					employers_value.textContent += mainList.employers.name[i] + ", "; 
     				}
    			});
      goods_btn.setAttribute('disabled', true);
      for( let i = 0; i < goods_item.length; i++ ) {

      	goods_item[i].addEventListener('change', () => {
      		goods_btn.removeAttribute('disabled');
      	});
      }
      	employers_btn.setAttribute('disabled', true);
      for( let i = 0; i < hire_employers_item.length; i++ ) {

      	hire_employers_item[i].addEventListener('change', () => {
      		employers_btn.removeAttribute('disabled');
      	});
      }
      if(mainList.open) {
      	goods_btn.setAttribute('disabled', true);
      	employers_btn.setAttribute('disabled', true);
   	 } else{
      	goods_btn.removeAttribute('disabled');
      	employers_btn.removeAttribute('disabled');
      	  }
       count_budget_value.setAttribute('disabled', true);
      (mainList.discount == true)? discount_value.style.backgroundColor = 'green':discount_value.style.backgroundColor = 'red';
  

 		
		
		 
		
			
		
