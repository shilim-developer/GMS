/**
 * 
 */
if(typeof GameVo == 'undefined') {
	function GameVo() {
		this.id;
		this.gamename;
		this.gametype;
		this.gameplace;
		this.equip;
		this.gametime;
		this.gamedec;
		this.status;
	}
}

GameVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
