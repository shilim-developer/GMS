package com.lp.gms.dao;

<<<<<<< HEAD
import java.util.List;

import com.lp.gms.model.Page;
import com.lp.gms.model.Role;
import com.lp.gms.model.User;

public interface UserDao {
=======
import com.lp.gms.model.User;

public interface UserDao {
	/**
	 * 查询用户是否存在
	 * @param user
	 * @return
	 */
	User selectByUser(User user);
	
>>>>>>> origin/jerry
    int deleteByPrimaryKey(Long id);

    int insert(User record);

    int insertSelective(User record);

<<<<<<< HEAD
    User selectByPrimaryKey(Long id);
=======
>>>>>>> origin/jerry

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
<<<<<<< HEAD
    
    /**
     * 根据用户名获取用户
     * @param username
     */
      User findOneByUsername(String username);
      
    /**
     * 根据用户角色列表
     * @param userId
     */
      List<Role> findRole(Long userId);
    
    /**
     * 找到用户的权限
     * @param id
     * @return
     */
    List<String> findPrivilegeCode(Long id);

    /**
     * 找到用户的角色名称.
     * @param id
     * @return
     */
    List<String> findRoleName(Long id);
      
    /**
     * 分页查询用户列表
     * @param page
     * @return
     */
    List<User> selectByPage(Page page);
      
    /**
     * 查询总记录数
     * @param page
     * @return tatal
     */
    long selectCount(Page page);
    
    /**
     * 用户登录
     */
    User accountValid(User user);
    
    int userNameExits(String name);
    
    /**
     * 删除用户
     * @param 登录用户名，密码
     * @return tatal
     */
    void deleteByList(List<User> users);
    
    
    boolean isExistLoginNameExcludeId(Long id, String loginName);
    
    int selectCounts();
    
    boolean selectByLoginName(String loginName);
=======
>>>>>>> origin/jerry
}