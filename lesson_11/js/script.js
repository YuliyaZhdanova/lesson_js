 
window.addEventListener('DOMContentLoaded', function () {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header') [0];


function hideTabContent(a) {
	for(let i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
	}
}

	hideTabContent(1);

function showTabContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabContent(0);
		tabContent[b].classList.add('show');
		tabContent[b].classList.remove('hide');
	}
}

info.addEventListener('click', function(event) {
  let target = event.target;
  if (target.className == 'info-header-tab') {
  	for (let i = 0; i < tab.length; i++) {
  		if (target == tab[i]) {
  			showTabContent(i);
  			break;
  		}
  	}
  }
});

let deadline = '2018-04-17';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60 ),
			hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};	
	
}
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');

			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = ('0' + t.hours).slice(-2);
				minutes.innerHTML = ('0' + t.minutes).slice(-2);
				seconds.innerHTML = ('0' + t.seconds).slice(-2);

				let timeInterval = setInterval(updateClock, 1000);
				
				if (t.total <= 0) { 
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';

				}
			}

		updateClock();
		

	}

	setClock('timer', deadline);	

	
	let more = document.querySelector('.more'),
	    descriptionButton = document.getElementsByClassName('description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		this.classList.add('.more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

  
	for(let i = 0; i < descriptionButton.length; i++) {
	descriptionButton[i].addEventListener('click', function() {
		this.classList.add('.more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
}
	close.addEventListener('click', function() {
		more.classList.remove('.more-splash');
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	});


    let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро мы с вами свяжемся";
	message.failure = "Что-то пошло не так";

	let form = document.getElementsByTagName("form"),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');


for(let i = 0; i < form.length; i++) {
	form[i].addEventListener('submit', function(event) {
	    event.preventDefault();
	    form[i].appendChild(statusMessage);

	//AJAX
	let request = new XMLHttpRequest();
	request.open('POST', "server.php");
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	let formData = new FormData(form[i]);

	request.send(formData);

	request.onreadystatechange = function() {
		if (request.readyState < 4) {
			statusMessage.innerHTML = message.loading;
	} else if (request.readyState === 4) {
		if (request.status == 200 && request.status < 300) {
			statusMessage.innerHTML = message.success;
		}
		else {
			statusMessage.innerHTML = message.failure;
		}
	}

	for(let i = 0; i < input.length; i++){
		input[i].value = "";
	}

	};


	});
}
	

function animate(draw, duration) {
	let start = performance.now();
		requestAnimationFrame(
			function animate(time) {
				let timePassed = time - start;
				if (timePassed > duration) {
					timePassed = duration;
				}

				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}
			}
		);
}


let menu = document.getElementsByTagName('nav')[0];

menu.addEventListener('click', function(event) {
   event.preventDefault();
   animate(function(timePassed) {
   	let target = event.target;
   	let section = document.getElementById(target.getAttribute('href').slice(1));
   	window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
   }, 1500);
});




 });
 

console.log(form);
 