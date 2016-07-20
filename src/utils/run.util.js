export class RunUtil {
	static calcuateSpeed(res) {
		let h = res.time / 60 / 60;
		return (res.distance / h).toFixed(2);
	}

	static calcuateRate(res) {
		let min = res.time / 60;
		return (min / res.distance).toFixed(2);
	}

	static makeSpeedArr(results) {
		return results.map( res => this.calcuateSpeed(res) );
	}

	static makeRateArr(results) {
		return results.map( res => this.calcuateRate(res) );
	}

	static getDateLabels(results) {
		return results.map( res => res.date );
	}
}