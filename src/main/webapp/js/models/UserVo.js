if(typeof UserVo == 'undefined') {
	function UserVo() {
		this.id;
		this.account;
		this.password;
		this.name;
		this.cardno;
		this.email;
		this.mobilephone;
		this.address;
		this.status;
<<<<<<< HEAD
		this.role;
		this.statusDescription;
=======
>>>>>>> origin/jerry
	}
}

UserVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}