import Chart from '/node_modules/chart.js/dist/Chart.bundle.min.js';
import { ResultsService } from './services/results.service.js';
import {inject} from 'aurelia-framework';

class VisualizeUtil {
	static calcuateSpeed(res) {
		let h = res.time / 60 / 60;
		return (res.distance / h).toFixed(2);
	}

	static makeSpeedArr(results) {
		return results.map( res => {
			let speed = VisualizeUtil.calcuateSpeed(res);
			return parseFloat(speed);
		});
	}

	static getDateLabels(results) {
		return results.map( res => res.date );
	}
}


@inject(ResultsService)
export class Visualize {
	results = null;
	chartData = null;
	constructor(resultsService) {
		this.resultsService = resultsService;
	}

	activate() {
		this.resultsService.getResults()
			.then( res => this.results = res )
			.then( res => this.chartData = {
				label: VisualizeUtil.getDateLabels(res),
				data: VisualizeUtil.makeSpeedArr(res)
			});
	}

	attached() {
		let ctx = this.myChart.getContext("2d");
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.chartData.label,
				datasets: [{
					label: 'Your runs results(km/min)',
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