import { ResultsService } from './services/results.service.js';
import {inject} from 'aurelia-framework';

@inject(ResultsService)
export class Results {
	results = null;

	constructor(resultsService) {
		this.resultsService = resultsService;
	}

	activate() {
		this.resultsService.getResults()
			.then( results => this.results = results )
			.catch( err => alert(err));
	}
}