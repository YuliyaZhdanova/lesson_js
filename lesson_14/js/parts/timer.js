function timer() {
	
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

}

module.exports = timer;