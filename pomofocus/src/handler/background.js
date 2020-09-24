import { storeInterval } from './starter.js';
import { timer } from '../classes/timer.js';

export const changeBg = (event) => {
	const target = event.target;
	const start_button = document.getElementsByClassName('time-count-btn')[0];
	switch (target.innerHTML) {
		case 'Pomodoro': //if clicked button this
			target.className = 'time-btn-active'; //where you clicked
			active(event.currentTarget); // just make clicked button active
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(240, 91, 86)'; // change page bg
			start_button.style.color = 'rgb(240, 91, 86)'; // make button active
			document.getElementById('validator').style.background = 'rgb(240, 91, 86)'; //validator bg
			start_button.id = 'pomodoro'; //change button id
			start_button.innerHTML = 'START';
			const time = document.getElementsByClassName('time-count')[0]; //timer board
			time.innerHTML = '25:00'; // initial status
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time to work!'; // change state of plan
			if (storeInterval.length > 0) timer.clear(storeInterval);
			break;
		case 'Short Break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(76, 166, 169)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(76, 166, 169)';
			document.getElementById('validator').style.background = 'rgb(76, 166, 169)';
			document.getElementsByClassName('time-count')[0].innerHTML = '05:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';
			start_button.id = 'short'; // change start button
			start_button.innerHTML = 'START';
			if (storeInterval.length > 0) timer.clear(storeInterval);
			break;
		case 'Long Break':
			target.className = 'time-btn-active';
			active(event.currentTarget);
			document.getElementsByClassName('wrapper')[0].style.background = 'rgb(73, 143, 193)';
			document.getElementsByClassName('time-count-btn')[0].style.color = 'rgb(73, 143, 193)';
			document.getElementById('validator').style.background = 'rgb(73, 143, 193)';
			document.getElementsByClassName('time-count')[0].innerHTML = '15:00';
			document.getElementsByClassName('start-work')[0].innerHTML = 'Time for a break';
			start_button.id = 'long'; // change start button
			start_button.innerHTML = 'START';
			if (storeInterval.length > 0) timer.clear(storeInterval);

			break;
	}

	function active(parent) {
		Array.from(parent.children).forEach((element) => {
			// make unclicked buttons inactive
			if (element !== event.target) {
				element.className = 'time-btn';
			}
		});
	}
};
