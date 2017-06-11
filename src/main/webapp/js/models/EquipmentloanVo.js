/**
 * 
 */
if(typeof EquipmentloanVo == 'undefined') {
	function EquipmentloanVo() {
		this.equipmentloanid;
		this.eId;
		this.ename;
		this.userId;
		this.rentnum;
		this.startdate;
        this.enddate;
	    this.rentday;
	    this.epayment;
	    this.estatus;
	}
	
}

EquipmentloanVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
