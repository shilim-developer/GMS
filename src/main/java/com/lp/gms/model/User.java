package com.lp.gms.model;

public class User {
    private Long id;

    private String account;

    private String password;

    private String name;

    private String cardno;

    private String email;

    private String mobilephone;

    private String address;

    private Byte status;

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardno() {
        return cardno;
    }

    public void setCardno(String cardno) {
        this.cardno = cardno;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobilephone() {
        return mobilephone;
    }

    public void setMobilephone(String mobilephone) {
        this.mobilephone = mobilephone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }
    
    @Override
	public String toString() {
		return "User [id=" + id + ", account=" + account + ", password=" + password + ", name=" + name + ", cardno="
				+ cardno + ", email=" + email + ", mobilephone=" + mobilephone + ", address=" + address + ", status="
				+ status + "]";
	}
}