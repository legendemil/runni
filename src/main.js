export class Main {
	isStart = false;
	currentTime = 0;
	showedTime = null;
	timer = null;

	pad(num) {
		return num < 10 ? '0' + num : num;
	}

	formatTime() {
		if(!this.currentTime)
			return this.showedTime = '00:00:00';
		let time = this.currentTime,
			h = 0,
			min = 0,
			sec = 0;
		h = parseInt(time / 60 / 60, 10);
		time = time - h * 60 * 60;
		min =  parseInt(time / 60, 10);
		time = time - min * 60;
		sec = time;
		return this.showedTime = `${this.pad(h)}:${this.pad(min)}:${this.pad(sec)}`;
	}

	startTimer() {
		console.log('started');
		this.timer = setTimeout(() => {
			this.currentTime++;
			this.formatTime();
			if(this.isStart)
				this.startTimer();
		},1000);
	}

	stopTimer() {
		this.isStart = false;
		console.log('stopped');
		clearTimeout(this.timer);
	}

	resetTimer() {
		console.log('reset imer');
		clearTimeout(this.timer);
		this.currentTime = 0;
		this.isStart = false;
		this.formatTime();
	}

	toggleTimer() {
		this.isStart = !this.isStart;
		if(this.isStart) 
			this.startTimer();
		else
			this.stopTimer();
	}

	attached() {
		this.formatTime();
	}
}