package com.lp.gms.model;


public class Equipmentloan {
    private Integer equipmentloanid;

    private Integer eId;

    private Integer userId;

    private String startdate;

    private String  enddate;
    
    private Integer rentday;

    private Integer epayment;

    private Integer rentnum;

    private String estatus;
    
    private Equipment equipment;
    
    private User user;
    
    private String ename;

    public Integer getEquipmentloanid() {
        return equipmentloanid;
    }

    public void setEquipmentloanid(Integer equipmentloanid) {
        this.equipmentloanid = equipmentloanid;
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

    public Integer getEpayment() {
        return epayment;
    }

    public void setEpayment(Integer epayment) {
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

	public Integer getRentday() {
		return rentday;
	}

	public void setRentday(Integer rentday) {
		this.rentday = rentday;
	}

	public Integer geteId() {
		return eId;
	}

	public void seteId(Integer eId) {
		this.eId = eId;
	}

	public Equipment getEquipment() {
		return equipment;
	}

	public void setEquipment(Equipment equipment) {
		this.equipment = equipment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}
}