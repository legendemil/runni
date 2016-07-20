import {inject} from 'aurelia-framework';
import Chart from '/node_modules/chart.js/dist/Chart.bundle.min.js';
import {ResultsService} from './services/results.service.js';
import {RunUtil} from './utils/run.util.js';

@inject(ResultsService)
export class Rate {
	results = null;
	charData = null;
	constructor(resultsService) {
		this.resultsService = resultsService;
	}

	active() {
		this.resultsService.getResults()
			.then( res => this.results = res )
			.then( res => this.charData = {
				label: RunUtil.getDateLabels(res),
				data: RunUtil.makeRateArr(res)
			});
	}

	attached() {

	}
}