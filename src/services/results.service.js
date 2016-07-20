let RESULTS = [{
	date: '12 lipiec',
	time: 1823,
	distance: '4.8'
}, {
	date: '14 lipiec',
	time: 1814,
	distance: '4.9'
}, {
	date: '17 lipiec',
	time: 1774,
	distance: 4.5
}, {
	date: '19 lipiec',
	time: 1829,
	distance: 4.6
}, {
	date: '21 lipiec',
	time: 1794,
	distance: 4.9
}, {
	date: '22 lipiec',
	time: 1795,
	distance: 4.9
}];

export class ResultsService {

	static secToMin(seconds) {
		let min = parseInt(seconds / 60, 10);
		let sec = seconds - 60 * min;
		return `${min}:${sec}`;
	}
	
	getResults() {
		return new Promise(function(resolve, reject) {
			if(RESULTS) {
				resolve(RESULTS);
			}
			else
				reject("Can't get list of results");
		});
	}
}