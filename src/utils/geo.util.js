import Distances from '/node_modules/geolocation-distances/index.js';

export class GeoUtil {
	pointA = null;
	pointB = null;
	distance = 0;
	watchId = null;
	isWatching = false;

	success(pos) {
		let coords = pos.coords;
		let dist = 0;
		if(!this.pointA) {
			this.pointA = coords;
			console.log('A', this.pointA);
			return;
		} 
		this.pointB = coords;
		console.log('B', this.pointB);
		console.log('A', this.pointA);
		dist = Distances.getDistance(this.pointA, this.pointB,10);

		this.pointA = this.pointB;
		console.log('distance: ' + dist, this.distance)
		if(!isNaN(dist))
			this.distance += dist;
		
	}	

	error(err){
		alert('Error: ' + err.message);
	}

	getNewPosition() {
		let options = {
			enableHighAccuracy: true,
  			maximumAge: 0
		};
		navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this), options);
	}

	getDistance() {
	 	return Number(this.distance * 1000).toFixed(0);
	}
}