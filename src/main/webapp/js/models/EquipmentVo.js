/**
 * 
 */
if(typeof EquipmentVo == 'undefined') {
	function EquipmentVo() {
		this.equipmentid;
		this.equipmentname;
		this.typeid;
		this.description;
		this.loanable;
		this.totalnum;
		this.underrepair;
	}
}

EquipmentVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
