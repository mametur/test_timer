import { timer } from '../classes/timer.js';

export const starter = (event) => {
	const time = document.getElementsByClassName('time-count')[0]; //timer board

	const countDown = new timer(10, time);

	if (event.target.innerHTML === 'START') {
		event.target.innerHTML = 'STOP';
		countDown.callInterval(this);
	} else {
		event.target.innerHTML = 'START';
		countDown.callInterval(this);
	}
};
