package com.lp.gms.dao;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.lp.gms.model.Page;
import com.lp.gms.model.Role;
import com.lp.gms.model.User;

public interface RoleDao {
    int deleteByPrimaryKey(Long id);

    int insert(Role record);

    int insertSelective(Role record);

    Role selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Role record);

    int updateByPrimaryKey(Role record);
     
    List<Role> selectAll();
    
    void deleteByList(List<Role> list);
    /**
     * 分页查询角色列表
     * @param page
     * @return
     */
    List<Role> selectByPage(Page page);
    
    /**
     * 查询总记录数
     * @param page
     * @return tatal
     */
    long selectCount(Page page);
    
    Role select(Role role);
    
    List<Role> findNowAllPermission(Map<String, Object> map);
    
    Set<String> findRoleByUserId(Long userId);
    
    Map<String, Object> deleteRoleById(String ids);
   
    int selectCounts();
     
    boolean isExistName(String name);
     
    boolean isExistNameExcludeId(Long id);
}