/**
 * 
 */
/**
 * 
 */
if(typeof EquipmentTypeVo == 'undefined') {
	function EquipmentTypeVo() {
		this.typeid;
		this.typename;
	}
}

EquipmentTypeVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
