/**
 * 
 */
if(typeof PostVo == 'undefined') {
	function PostVo() {
		this.id;
		this.name;
		this.context;
		this.time;
	}
}

PostVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
