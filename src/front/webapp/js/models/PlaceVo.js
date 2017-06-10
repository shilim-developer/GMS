if(typeof PlaceVo == 'undefined') {
	function PlaceVo() {
		this.id;
		this.placeName;
		this.placeLocation;
		this.placeType;
		this.cost;
		this.status;
	}
}

PlaceVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
