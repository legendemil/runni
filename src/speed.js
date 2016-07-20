import {inject} from 'aurelia-framework';
import Chart from '/node_modules/chart.js/dist/Chart.bundle.min.js';
import { ResultsService } from './services/results.service.js';
import {RunUtil} from './utils/run.util.js';


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
				data: RunUtil.makeSpeedArr(res)
			});
	}

	attached() {
		let ctx = this.myChart.getContext("2d");
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.chartData.label,
				datasets: [{
					label: 'km/h',
					data: this.chartData.data,
					fill: true,
					lineTension: 0.1,
					backgroundColor: "rgba(25,118,210, .5)",
		            borderColor: "#1565c0",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
				}]
			},
			options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:false
		                }
		            }]
		        }
		    }
		});
	}

}