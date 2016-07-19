export class App {
	
	showMenu = false;

	configureRouter(config, router) {
		config.title = 'Runni';
	    config.map([
	     { route: ['', 'main'], name: 'main', moduleId: './main', nav: true, title: 'Main'},
	     { route: 'results', name: 'results', moduleId: './results', nav: true, title: 'Show your results'},
	     { route: 'visualize', name: 'visualize', moduleId: './visualize', nav: true, title: 'Visualize it'}
	    ]);

	this.router = router;
	}
	
	toggleMenu() {
		this.showMenu = !this.showMenu;
	}
}

