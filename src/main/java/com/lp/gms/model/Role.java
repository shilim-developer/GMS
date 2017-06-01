package com.lp.gms.model;

import java.util.LinkedList;
import java.util.List;

public class Role {
    private Long id;

    private String description;

    private Byte status;

    private String type;
    
    //***做 role --> permission 一对多处理
    private List<Permission> permissions = new LinkedList<Permission>();

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

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

	public List<Permission> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<Permission> permissions) {
		this.permissions = permissions;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", description=" + description + ", status=" + status + ", type=" + type
				+ ", permissions=" + permissions + "]";
	}
    
    
}