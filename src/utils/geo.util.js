import Distances from '/node_modules/geolocation-distances/index.js';

export class GeoUtil {
	pointA = null;
	pointB = null;
	distance = 0;
	watchId = null;

	static success(pos) {
		console.log('successsssss');
		let coords = pos.coords;
		let dist = 0;
		if(!GeoUtil.pointA) {
			GeoUtil.pointA = coords;
			console.log('A', GeoUtil.pointA);
			return;
		} 
		if(GeoUtil.pointA) {
			GeoUtil.pointB = coords;
			dist = Distances.getDistance(GeoUtil.pointA, GeoUtil.pointB);

			[GeoUtil.pointA, GeoUtil.pointB] = [GeoUtil.pointB, null];
			console.log('dis: ' + dist)
			if(!isNaN(dist))
				GeoUtil.distance += dist;
		}
	}	

	error(err){
		alert('Error: ' + err.message);
	}

	static startWatching() {
		let options = {
			enableHighAccuracy: true,
  			timeout: 5000,
  			maximumAge: 0
		};
		this.id = navigator.geolocation.watchPosition(this.success, this.error, options);
	}

	static stopWatching() {
		navigator.geolocation.clearWatch(this.id);
	}

	static getDistance() {
		return 'sadsa: ' + this.distance;
	}
}