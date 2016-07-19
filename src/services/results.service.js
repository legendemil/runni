const RESULTS = [{
	date: '12 lipiec',
	time: '30:23',
	distance: '4.8'
}, {
	date: '14 lipiec',
	time: '30:14',
	distance: '4.9'
}, {
	date: '17 lipiec',
	time: '29:34',
	distance: '4.5'
}, {
	date: '19 lipiec',
	time: '30:29',
	distance: '4.6'
}, {
	date: '21 lipiec',
	time: '29:54',
	distance: '4.9'
}, {
	date: '22 lipiec',
	time: '29:55',
	distance: '4.9'
}];

export class ResultsService {
	getResults() {
		return new Promise(function(resolve, reject) {
			if(RESULTS)
				resolve(RESULTS);
			else
				reject("Can't get list of results");
		});
	}
}