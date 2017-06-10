package com.lp.gms.model;

public class Equipment {
    private Integer equipmentid;

    private String equipmentname;

    private EquipmentType equipmentType;
   
    private String estandard;

    private Integer eprice;

    private Integer totalnum;

    private Integer loanablenum;

    public Integer getEquipmentid() {
        return equipmentid;
    }

    public void setEquipmentid(Integer equipmentid) {
        this.equipmentid = equipmentid;
    }

    public String getEquipmentname() {
        return equipmentname;
    }

    public void setEquipmentname(String equipmentname) {
        this.equipmentname = equipmentname;
    }



    public String getEstandard() {
        return estandard;
    }

    public void setEstandard(String estandard) {
        this.estandard = estandard;
    }

    public Integer getEprice() {
        return eprice;
    }

    public void setEprice(Integer eprice) {
        this.eprice = eprice;
    }

    public Integer getTotalnum() {
        return totalnum;
    }

    public void setTotalnum(Integer totalnum) {
        this.totalnum = totalnum;
    }

    public Integer getLoanablenum() {
        return loanablenum;
    }

    public void setLoanablenum(Integer loanablenum) {
        this.loanablenum = loanablenum;
    }

	public EquipmentType getEquipmentType() {
		return equipmentType;
	}

	public void setEquipmentType(EquipmentType equipmentType) {
		this.equipmentType = equipmentType;
	}


	

}
