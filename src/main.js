import { GeoUtil } from './utils/geo.util.js';

export class Main {
	isStart = false;
	currentTime = 0;
	showedTime = null;
	timer = null;
	distance = 0;
	showedDistance = null;
	geoWatcher = null;

	showDistance(isZero) {
		if(isZero)
			this.distance = 0;
		this.showedDistance = this.distance >= 1000 ? (this.distance / 1000).toFixed(3) + 'km' : this.distance + 'm';
	}

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
		if(!this.geoWatcher) 
			this.geoWatcher = new GeoUtil();
		if(!this.geoWatcher.isWatching)
			this.geoWatcher.isWatching = true;

		this.geoWatcher.getNewPosition();
		this.distance = this.geoWatcher.getDistance();
		this.showDistance();
		this.timer = setTimeout(() => {
			this.currentTime++;
			this.formatTime();
			if(this.isStart)
				this.startTimer();
		},1000);
	}

	stopTimer() {
		console.log('stopped');
		clearTimeout(this.timer);
		this.geoWatcher.isWatching = false;
		this.isStart = false;
	}

	resetTimer() {
		console.log('reset timer');
		clearTimeout(this.timer);
		this.geoWatcher.isWatching = false;		
		this.currentTime = 0;
		this.showDistance(true);
		this.isStart = false;
		this.formatTime();
		this.geoWatcher = null;
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
		this.showDistance();
	}
}