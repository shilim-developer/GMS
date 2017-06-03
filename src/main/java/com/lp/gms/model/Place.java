package com.lp.gms.model;

public class Place {
    private Integer id;

    private String placeName;

    private String placeLocation;

    private PlaceType placeType;

    private Integer cost;

    private Boolean status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlaceLocation() {
        return placeLocation;
    }

    public void setPlaceLocation(String placeLocation) {
        this.placeLocation = placeLocation;
    }

    public PlaceType getPlaceType() {
		return placeType;
	}

	public void setPlaceType(PlaceType placeType) {
		this.placeType = placeType;
	}

	public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

	@Override
	public String toString() {
		return "Place [id=" + id + ", placeName=" + placeName + ", placeLocation=" + placeLocation + ", placeType="
				+ placeType + ", cost=" + cost + ", status=" + status + "]";
	}

}