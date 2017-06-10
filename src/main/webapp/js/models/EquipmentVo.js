/**
 * 
 */
if(typeof EquipmentVo == 'undefined') {
	function EquipmentVo() {
		this.equipmentid;
		this.equipmentname;
		this.equipmentType;
		this.equipmentloan;
		this.estandard;
		this.eprice;
		this.totalnum;
		this.loanablenum;
	}
	
}

EquipmentVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
