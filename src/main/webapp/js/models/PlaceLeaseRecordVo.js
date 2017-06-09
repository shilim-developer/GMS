if(typeof PlaceLeaseRecordVo == 'undefined') {
	function PlaceLeaseRecordVo() {
		this.id;
		this.placeId;
		this.startTime;
		this.endTime;
		this.userId;
		this.cost;
		this.result;
		this.payStatus;
		this.checkStatus;
	}
}

PlaceLeaseRecordVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
