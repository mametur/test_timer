import { timer } from '../classes/timer.js';

const time = document.getElementsByClassName('time-count')[0]; //timer board
const start_button = document.getElementsByClassName('time-count-btn')[0]; //start button
export const storeInterval = []; // store interval
const countDown = new timer(1500, time, start_button); // first
const countDown1 = new timer(300, time, start_button);
const countDown2 = new timer(900, time, start_button);
export const starter = (event) => {
	if (start_button.id === 'pomodoro') {
		if (storeInterval.length > 0) timer.clear(storeInterval);

		if (event.target.innerHTML === 'START') {
			if (countDown.startTimesValue === 0) {
				countDown.reStartTimes = countDown.firstTimesValue;
			}
			event.target.innerHTML = 'STOP';
			countDown.callInterval(this);
			storeInterval.push(countDown.interId);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
		}
	} else if (start_button.id === 'short') {
		if (storeInterval.length > 0) timer.clear(storeInterval);
		if (event.target.innerHTML === 'START') {
			if (countDown1.startTimesValue === 0) {
				countDown1.reStartTimes = countDown1.firstTimesValue;
			}
			event.target.innerHTML = 'STOP';
			countDown1.callInterval(this);
			storeInterval.push(countDown1.interId);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
		}
	} else if (start_button.id === 'long') {
		if (storeInterval.length > 0) timer.clear(storeInterval);
		if (event.target.innerHTML === 'START') {
			if (countDown2.startTimesValue === 0) {
				countDown2.reStartTimes = countDown2.firstTimesValue;
			}
			event.target.innerHTML = 'STOP';
			countDown2.callInterval(this);
			storeInterval.push(countDown2.interId);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
		}
	}
};
