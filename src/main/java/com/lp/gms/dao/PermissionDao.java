package com.lp.gms.dao;

import java.util.List;
import java.util.Set;

import com.lp.gms.model.Page;
import com.lp.gms.model.Permission;
import com.lp.gms.model.PermissionBo;
import com.lp.gms.model.Role;

public interface PermissionDao {
    int deleteByPrimaryKey(Long id);

    int insert(Permission record);

    int insertSelective(Permission record);

    Permission selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Permission record);

    int updateByPrimaryKey(Permission record);
    
    List<PermissionBo> selectPermissionById(Long id);
    
	//根据用户ID获取权限的Set集合
	Set<String> findPermissionByUserId(Long id);
	
    /**
     * 分页查询权限列表
     * @param page
     * @return
     */
    List<Permission> selectByPage(Page page);
    
    /**
     * 查询总记录数
     * @param page
     * @return tatal
     */
    long selectCount(Page page);
    
    /**
     * 根据用户ID查询该用户所拥有的权限列表
     * @param UserId
     * @return
     */
    List<Permission> findListPermissionByUserId(Long userId);
    
    /**
     * 根据用户ID查询用户菜单列表
     * @param UserId
     * @return
     */
    List<Permission> findMenuListByUserId(Long userId);
    
	
}