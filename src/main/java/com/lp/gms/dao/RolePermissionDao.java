package com.lp.gms.dao;

import com.lp.gms.model.RolePermissionKey;

public interface RolePermissionDao {
    int deleteByPrimaryKey(RolePermissionKey key);

    int insert(RolePermissionKey record);

    int insertSelective(RolePermissionKey record);
}