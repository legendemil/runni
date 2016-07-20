import Chart from '/node_modules/chart.js/dist/Chart.bundle.min.js';

export class ChartUtil {
	static createChart(ctx, data) {

		let chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: data.label,
				datasets: [{
					label: data.description,
					data: data.data,
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

		return chart;
	}
}