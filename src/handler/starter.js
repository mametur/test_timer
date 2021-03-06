import { timer } from '../classes/timer.js';

const time = document.getElementsByClassName('time-count')[0]; //timer board
const start_button = document.getElementsByClassName('time-count-btn')[0]; //start button
export const storeInterval = []; // store interval
let pomodoro = new timer(1500, time, start_button); // first
let shortBreak = new timer(300, time, start_button);
let longBreak = new timer(900, time, start_button);
export const starter = (event) => {
	// click sound

	const sound = new Audio('./public/assets/sound/click.mp3');
	sound.play();

	if (start_button.id === 'pomodoro') {
		if (storeInterval.length > 0) timer.clear(storeInterval);

		if (pomodoro.isRunning) {
			if (pomodoro.startTimesValue === 0) {
				pomodoro.reStartTimes = pomodoro.firstTimesValue;
			}
			event.target.innerHTML = 'STOP';
			pomodoro.callInterval(this);
			storeInterval.push(pomodoro.interId);
			// reset previous timer
			shortBreak = new timer(300, time, start_button);
			longBreak = new timer(900, time, start_button);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
			pomodoro.stop();
		}
	} else if (start_button.id === 'short') {
		if (storeInterval.length > 0) timer.clear(storeInterval);
		if (shortBreak.isRunning) {
			if (shortBreak.startTimesValue === 0) {
				shortBreak.reStartTimes = shortBreak.firstTimesValue;
			}
			pomodoro = new timer(1500, time, start_button);
			event.target.innerHTML = 'STOP';
			shortBreak.callInterval(this);
			storeInterval.push(shortBreak.interId);
			// reset previous timer
			pomodoro = new timer(1500, time, start_button);
			longBreak = new timer(900, time, start_button);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
			shortBreak.stop();
		}
	} else if (start_button.id === 'long') {
		if (storeInterval.length > 0) timer.clear(storeInterval);
		if (longBreak.isRunning) {
			if (longBreak.startTimesValue === 0) {
				longBreak.reStartTimes = longBreak.firstTimesValue;
			}
			event.target.innerHTML = 'STOP';
			longBreak.callInterval(this);
			storeInterval.push(longBreak.interId);
			// reset previous timer
			pomodoro = new timer(1500, time, start_button);
			shortBreak = new timer(300, time, start_button);
		} else {
			event.target.innerHTML = 'START';
			timer.clear(storeInterval);
			longBreak.stop();
		}
	}
};
