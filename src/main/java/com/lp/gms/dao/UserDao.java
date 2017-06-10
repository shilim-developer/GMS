package com.lp.gms.dao;

import com.lp.gms.model.User;

public interface UserDao {
	/**
	 * 查询用户是否存在
	 * @param user
	 * @return
	 */
	User selectByUser(User user);
	
    int deleteByPrimaryKey(Long id);

    int insert(User record);

    int insertSelective(User record);


    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}