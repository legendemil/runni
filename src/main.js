import { inject } from 'aurelia-framework';
import { TimerUtil } from './utils/timer.util.js';

@inject(TimerUtil)
export class Main {

	constructor(timer, geo) {
		this.timer = timer;
		this.geo = this.timer.geoWatcher;
	}
	attached() {
		this.timer.formatTime();
		this.geo.showDistance();
	}
}