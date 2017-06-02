if(typeof PlaceStatusVo == 'undefined') {
	function PlaceStatusVo() {
		this.id;
		this.placeId;
		this.timeId;
		this.placeStatus;
	}
}

PlaceStatusVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
