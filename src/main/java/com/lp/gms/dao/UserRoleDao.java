package com.lp.gms.dao;

import java.util.List;
import java.util.Map;

import com.lp.gms.model.UserRole;

public interface UserRoleDao {
    int insert(UserRole record);

    int insertSelective(UserRole record);
    
    int deleteByUserId(Long id);
    
    int deleteRoleByUserIds(Map<String, Object> resultMap);
    
    List<Long> findUserIdByRoleId(Long roleId);
    
}