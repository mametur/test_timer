export class timer {
	firstTime;
	running = true;
	constructor(startTime, timeBoard, buttonName) {
		this.startTime = startTime;
		this.timeBoard = timeBoard;
		this.setInterval;
		this.firstTime = startTime;
		this.buttonName = buttonName;
	}

	callInterval() {
		this.setInterval = setInterval(this.countDown.bind(this), 1000);
	}

	countDown() {
		if (this.startTime === 0) {
			clearInterval(this.setInterval);
			this.buttonName.innerHTML = 'START';
			this.timeBoard.innerHTML = this.renderSecond(this.firstTime);
			this.isRunning = true; // when time finish
			return;
		}
		this.isRunning = false;
		this.startTime = --this.startTime;
		this.timeBoard.innerHTML = this.renderSecond(this.startTime);
	}

	renderSecond(totalSecond) {
		let minutes = Math.floor(totalSecond / 60); // find how many minutes in it
		let seconds = Math.floor(totalSecond % 60); // remain is second

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		return minutes + ':' + seconds;
	}

	static clear(params) {
		params.forEach((element) => {
			clearInterval(element);
		});
	}
	stop() {
		this.isRunning = true;
	}

	get interId() {
		return this.setInterval;
	}

	get firstTimesValue() {
		return this.firstTime;
	}
	get startTimesValue() {
		return this.startTime;
	}
	set reStartTimes(resetTime) {
		this.startTime = resetTime;
	}

	get isRunning() {
		return this.running;
	}
	set isRunning(run) {
		this.running = run;
	}

	static active(parent) {
		Array.from(parent.children).forEach((element) => {
			// make unclicked buttons inactive
			if (element !== event.target) {
				element.className = 'time-btn';
			}
		});
	}
}
