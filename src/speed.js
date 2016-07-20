import { inject } from 'aurelia-framework';
import { ChartUtil } from './utils/chart.util.js'
import { ResultsService } from './services/results.service.js';
import { RunUtil } from './utils/run.util.js';


@inject(ResultsService)
export class Speed {
	results = null;
	chartData = null;
	constructor(resultsService) {
		this.resultsService = resultsService;
	}

	activate() {
		this.resultsService.getResults()
			.then( res => this.results = res )
			.then( res => this.chartData = {
				label: RunUtil.getDateLabels(res),
				data: RunUtil.makeSpeedArr(res),
				description: 'km/h'
			});
	}

	attached() {
		console.log(this.chartData)
		let ctx = this.myChart.getContext("2d");
		let chart = ChartUtil.createChart(ctx, this.chartData);
	}

}