if(typeof RoleVo == 'undefined') {
	function RoleVo() {
		this.id;
		this.description;
		this.status;
        this.type;
	}
}

UserVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}