package com.lp.gms.model;


public class Equipmentloan {
    private Integer equipmentloanid;

    private Integer equipmentid;

    private Integer userId;

    private String startdate;

    private String  enddate;

    private String epayment;

    private Integer rentnum;

    private String estatus;

    public Integer getEquipmentloanid() {
        return equipmentloanid;
    }

    public void setEquipmentloanid(Integer equipmentloanid) {
        this.equipmentloanid = equipmentloanid;
    }

    public Integer getEquipmentid() {
        return equipmentid;
    }

    public void setEquipmentid(Integer equipmentid) {
        this.equipmentid = equipmentid;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

  
    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public String getEpayment() {
        return epayment;
    }

    public void setEpayment(String epayment) {
        this.epayment = epayment;
    }

    public Integer getRentnum() {
        return rentnum;
    }

    public void setRentnum(Integer rentnum) {
        this.rentnum = rentnum;
    }

    public String getEstatus() {
        return estatus;
    }

    public void setEstatus(String estatus) {
        this.estatus = estatus;
    }
}