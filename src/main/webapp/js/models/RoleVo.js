if(typeof RoleVo == 'undefined') {
	function RoleVo() {
		this.id;
		this.description;
		this.status;
        this.type;
	}
}

RoleVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}