package com.lp.gms.model;

public class Equipment {
    private Integer equipmentid;

    private String equipmentname;

    private Integer typeid;

    private String estandard;

    private String eprice;

    private Integer totalnum;

    private Boolean underrepair;

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

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public String getEstandard() {
        return estandard;
    }

    public void setEstandard(String estandard) {
        this.estandard = estandard;
    }

    public String getEprice() {
        return eprice;
    }

    public void setEprice(String eprice) {
        this.eprice = eprice;
    }

    public Integer getTotalnum() {
        return totalnum;
    }

    public void setTotalnum(Integer totalnum) {
        this.totalnum = totalnum;
    }

    public Boolean getUnderrepair() {
        return underrepair;
    }

    public void setUnderrepair(Boolean underrepair) {
        this.underrepair = underrepair;
    }
}