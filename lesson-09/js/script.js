window.addEventListener("DOMContentLoaded", function() {
	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {

		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');

		}

	}
	hideTabContent(1);

function showTabContent(b) {
	if(tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}
	info.addEventListener('click', function(event){
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

	let deadLine = '2018-08-20';
	
	
	function geTimeRemainig(endTime) {
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
function setClock(id, endtime) {

	let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
function checkTime(a) {
	 	(a < 10)? a = "0"+a : a = a ;
	 return a;
	 	}

		function updateClock() {
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
	}
	setClock('timer', deadLine)


	// modal

	let more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	    more.addEventListener('click', function() {
	    	this.classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	    });
	   close.addEventListener('click', function() {
	   		overlay.style.display = 'none';
	   		more.classList.remove('more-splash');
	   		document.body.style.overflow = '';
	   })
});