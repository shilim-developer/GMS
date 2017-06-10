package com.lp.gms.model;

public class PlaceStatus {
    private Long id;

    private Integer placeId;

    private Integer timeId;

    private String placeStatus;
    
    private TimeOption time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPlaceId() {
        return placeId;
    }

    public void setPlaceId(Integer placeId) {
        this.placeId = placeId;
    }

    public Integer getTimeId() {
        return timeId;
    }

    public void setTimeId(Integer timeId) {
        this.timeId = timeId;
    }

    public String getPlaceStatus() {
        return placeStatus;
    }

    public void setPlaceStatus(String placeStatus) {
        this.placeStatus = placeStatus;
    }

	public TimeOption getTime() {
		return time;
	}

	public void setTime(TimeOption time) {
		this.time = time;
	}
}