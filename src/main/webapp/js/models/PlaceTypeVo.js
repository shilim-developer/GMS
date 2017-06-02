if(typeof PlaceTypeVo == 'undefined') {
	function PlaceTypeVo() {
		this.id;
		this.placeTypeName;
	}
}

PlaceTypeVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
