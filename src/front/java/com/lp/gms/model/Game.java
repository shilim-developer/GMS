package com.lp.gms.model;

import java.sql.Date;

public class Game {
	private Integer id;

	private String gamename;
	
    private String gametype;

    private String gameplace;

    private String equip;

    private String gametime;

    private String gamedec;
    
    private String status;


    
	public Integer getId() {
		return id;
	}



	public void setId(Integer id) {
		this.id = id;
	}



	public String getGamename() {
		return gamename;
	}



	public void setGamename(String gamename) {
		this.gamename = gamename;
	}



	public String getGametype() {
		return gametype;
	}



	public void setGametype(String gametype) {
		this.gametype = gametype;
	}



	public String getGameplace() {
		return gameplace;
	}



	public void setGameplace(String gameplace) {
		this.gameplace = gameplace;
	}



	public String getEquip() {
		return equip;
	}



	public void setEquip(String equip) {
		this.equip = equip;
	}



	public String getGametime() {
		return gametime;
	}



	public void setGametime(String gametime) {
		this.gametime = gametime;
	}



	public String getGamedec() {
		return gamedec;
	}



	public void setGamedec(String gamedec) {
		this.gamedec = gamedec;
	}



	
	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}
	
	@Override
	public String toString() {
		return "Game [id=" + id + ", gamename=" + gamename +", gametype=" + gametype + ", gameplace=" + gameplace + ", equip=" + equip + ", gametime=" + gametime +", gamedec="
				+ ", status=" + status +  "]";
	}



}
