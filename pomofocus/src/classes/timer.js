export class timer {
	startTime = 0;
	currentTime = 0;
	down = 1; //1 second

	constructor(startTime, timeBoard) {
		this.startTime = startTime;
		//document.getElementById('start_button').addEventListener('click', this.callInterval.bind(this));
		this.timeBoard = timeBoard;
		this.running = false;
	}

	callInterval(event) {
		if (this.running) {
			clearInterval(this.currentTime);
			return;
		}

		this.running = true;
		this.currentTime = setInterval(this.countDown.bind(this), 1000);
	}

	countDown() {
		this.startTime = this.startTime - this.down;
		this.timeBoard.innerHTML = this.renderSecond(this.startTime);
		console.log(this.startTime);
	}

	renderSecond(totalSecond) {
		let minutes = Math.floor(totalSecond / 60); // find how many minutes in it
		let seconds = Math.floor(totalSecond % 60); // remain is second

		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		return minutes + ':' + seconds;
	}

	stop() {
		clearInterval(this.currentTime);
		this.running = false;
	}
}
