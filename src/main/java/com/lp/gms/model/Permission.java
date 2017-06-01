package com.lp.gms.model;

public class Permission {
    private Long id;

    private String description;

    private String matchurl;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMatchurl() {
        return matchurl;
    }

    public void setMatchurl(String matchurl) {
        this.matchurl = matchurl;
    }

	@Override
	public String toString() {
		return "Permission [id=" + id + ", description=" + description + ", matchurl=" + matchurl + "]";
	}
    
    
}