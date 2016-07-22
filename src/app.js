import { inject } from 'aurelia-framework';
import { TimerUtil } from './utils/timer.util.js';
import { GeoUtil } from './utils/geo.util.js';


@inject(TimerUtil, GeoUtil)
export class App {
	
	showMenu = false;

	constructor(timer, geo) {
		this.timer = timer;
		this.geo = geo;
	}

	configureRouter(config, router) {
		config.title = 'Runni';
	    config.map([
	     { route: ['', 'main'], name: 'main', moduleId: './main', nav: true, title: 'Main'},
	     { route: 'results', name: 'results', moduleId: './results', nav: true, title: 'Show your results'},
	     { route: 'speed', name: 'speed', moduleId: './speed', nav: true, title: 'Your speed'},
	     { route: 'rate', name: 'rate', moduleId: './rate', nav: true, title: 'Your rate'}
	    ]);

		this.router = router;
	}
	
	toggleMenu() {
		this.showMenu = !this.showMenu;
	}
}

