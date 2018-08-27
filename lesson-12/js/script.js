window.addEventListener("DOMContentLoaded", () => {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = (a) => {

		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}

	}
	hideTabContent(1);

let showTabContent = (b) => {
	if(tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
	info.addEventListener('click', (event) => {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	})
	// timer

	let deadLine = '2018-08-25';
	
	
	let geTimeRemainig = (endTime) => {
		let t = Date.parse(endTime) - Date.parse(new Date());
			(t < 0)? t = 0 : t = t;
		let seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( t/(1000*60*60));
		

			return {
						'total': t,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds	
			};
	};
let setClock = (id, endtime) => {

	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
let checkTime = (a) => {
	 	(a < 10)? a = "0"+a : a = a ;

	 return a;
	 	};

	 	

		let updateClock = () => {
			let t = geTimeRemainig(endtime);
			hours.innerHTML = checkTime(t.hours);
			minutes.innerHTML = checkTime(t.minutes);
			seconds.innerHTML = checkTime(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		};
		updateClock();

		var timeInterval = setInterval(updateClock, 1000);
	};
	setClock('timer', deadLine);


	// modal

	let more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close'),
	    btnDesc = document.querySelectorAll('.description-btn');
	 

	    more.addEventListener('click', () => {
	    	console.log(more);
	    	more.classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	    });
	    for(let i = 0; i < btnDesc.length; i++) {
	    btnDesc[i].addEventListener('click', () => {
	    	btnDesc[i].classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	      });
	}
	   close.addEventListener('click', () => {
	   		overlay.style.display = 'none';
	   		more.classList.remove('more-splash');
	   		document.body.style.overflow = '';
	   });
	   // form
	let message = new Object();
	message.loading = '<img src = "gif/ajax-loader.gif"/>'	;
	message.succes = "Спасибо! Скоро с вами свяжемся";
	message.failure = "<img src = 'gif/ajax-loader.gif'/>";
// ajax запрос всплывающего меню
	let form =document.getElementsByClassName('main-form')[0],
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);


			// AJAX
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			 request.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");

			 let formData = new  FormData(form);
			 // отправка запроса
			 request.send(formData);

			 request.onreadystatechange = function() {
			 	if(request.readyState < 4) {

			 		statusMessage.innerHTML = message.loading;

			 	} else if(request.readyState === 4){
			 		console.log(request.readyState+"  "+request.status);
			 			if(request.status === 200 && request.status < 300) {
			 					statusMessage.innerHTML = message.succes;
			 					// добавляем данные
			 					} else {

			 						statusMessage.appendChild(message.failure);
			 			}
			 		}
			 	}
			 	console.log(request.readyState);
			  for(let i = 0; i < input.length; i++) {
			 	input[i].value = "";
			 }
		});

// ajax запрос контактной формы
let contact_form =document.getElementById('form'),
		inputs = contact_form.getElementsByTagName('input'),
		statusMessages = document.createElement('div');

		statusMessages.classList.add('status');

		contact_form.addEventListener('submit', function(event) {
			event.preventDefault();


			contact_form.appendChild(statusMessages);
			// AJAX
			let request = new XMLHttpRequest();
			// настройка запроса
			request.open('POST', 'server.php');

			 request.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");

			 let formData = new  FormData(contact_form);
			 request.send(formData);

			 request.onreadystatechange = function() {
			 	if(request.readyState < 4) {

			 		statusMessages.innerHTML = message.loading;

			 	} else if(request.readyState === 4){
			 			if(request.status === 200 && request.status < 300) {

			 					statusMessages.innerHTML = message.succes;
			 					// добавляем данные
			 					} else {
			 						statusMessages.innerHTML = message.failure;
			 			}
			 		}
			 	}
			  for(let i = 0; i < inputs.length; i++) {
			 	inputs[i].value = "";
			 }
		});


let a = document.querySelectorAll('nav > ul > li > a');
let ul = document.querySelectorAll('nav > ul')[0];

// мягкая пролщкруььтка по меню
	ul.addEventListener('click', (e) => {
	let id = e.target.hash.slice(1);
		
	function elmYPosition(eID) {
    let elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}
console.log(elmYPosition(id));

function smoothScroll(id) {
    let startY = self.pageYOffset;
    let stopY = elmYPosition(id);
    let distance = (stopY > startY) ? stopY - startY : startY - stopY;
    
    let speed = Math.round(distance / 200);
    let step = Math.round(distance / 200);
    let leapY = (stopY > startY) ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for ( let i = startY; i < stopY; i += step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( let i = startY; i > stopY; i -= step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}
smoothScroll(id);
// let phone = document.getElementById("popup-form__input");
// phone.addEventListener('click', ValidPhone());
// function ValidPhone() {
//     let re = /^\d[\d\(\)\ -]{4,14}\d$/;
    
//     let result = re.test(myPhone);
//      (result)? output = 'Номер телефона введен правильно!':output = 'Номер телефона введен неправильно!';
     
//     document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
//     return valid;
// }
// 	ValidPhone();  
	});
		// slider
		 let slideIndex = 1,
		 		slides = document.getElementsByClassName('slider-item'),
		 		prev = document.querySelector('.prev'),
		 		next= document.querySelector('.next'),
		 		dotsWrap = document.querySelector('.slider-dots'),
		 		dots = document.getElementsByClassName('dot');

		 			showSlides(slideIndex);
		 function showSlides(n) {

		 		if (n > slides.length) {
		 			slideIndex = 1;
		 		}
		 		if (n < 1) {
		 			slideIndex = slides.length;
		 		}
		 		for(let i = 0; i < slides.length; i++) {
		 			slides[i].style.display = 'none';
		 		};
		 		for (let i=0; i < dots.length; i++) {
		 			dots[i].classList.remove('dot-active');
		 			console.log(dots[i]);
		 			};
		 			slides[slideIndex -1].style.display = 'block';
		 			dots[slideIndex -1].classList.add('dot-activ');
		 			
		 }
		 function plusSlides(n) {
		 	showSlides(slideIndex +=n)
		 }
		 function currentSlie(n) {
		 	showSlides(slideIndex =n)
		}		 
		 prev.addEventListener('click', function(){
		 	plusSlides(-1);
		 });
		  next.addEventListener('click', function(){
		 	plusSlides(1);
		 });
		  dotsWrap.addEventListener('click', function(event) {
		  	for(let k = 0; k < dots.length; k++) {
		  		if(event.target.classList.contains('dot') && event.target == dots[k -1]) {
		  			currentSlie(k); 
		  		}
		  	}
		  });
		  // calculator
		  let persons = document.getElementsByClassName('counter-block-input')[0],
		   restDays = document.getElementsByClassName('counter-block-input')[1],
		   totalValue = document.getElementById('total'),
		   place = document.getElementById('select'),
		   personsSumm = 0,
		   daysSum = 0,
		   total = 0;


		   totalValue.innerHTML = 0;
		   persons.addEventListener('change', function() {
		   		personsSumm =+ this.value;
		   		total = (daysSum + personsSumm)* 4000;
		   		if(restDays.value == "") {
		   			totalValue.innerHTML = 0;
		   		}
		   })
		    restDays.addEventListener('change', function() {
		   		daysSum =+ this.value;
		   		total = (daysSum + personsSumm)* 4000;
		   		if(persons.value == "") {
		   			totalValue.innerHTML = 0;
		   		}
		   })
});