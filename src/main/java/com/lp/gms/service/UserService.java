package com.lp.gms.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.UserDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.Place;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.Role;
import com.lp.gms.model.User;
import com.lp.gms.model.UserRole;
import com.lp.gms.utils.MD5Utils;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserService {
	@Autowired
	private UserDao userDao;
	
	public ResultMessage addUser(User user) throws Exception {
		String password = MD5Utils.md5(user.getPassword());
		user.setPassword(password);
		userDao.insertSelective(user);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage selectUser(User user) throws Exception {
	    User rUser = userDao.selectByPrimaryKey(user.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询成功",rUser);
	}
	
	public ResultMessage selectUserByName(User user) throws Exception {
	    User rUser = userDao.findOneByUsername(user.getName());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询成功",rUser);
	}
	
	public ResultMessage updateUser(User user) throws Exception {
		userDao.updateByPrimaryKey(user);
		return new ResultMessage(true,ResultCode.SUCCESS,"更新成功",null);
	}
	
	public ResultMessage deleteUser(User user) throws Exception {
		userDao.deleteByPrimaryKey(user.getId());
		UserRole userRole = new UserRole();
		userRole.setUid(user.getId());
		//TODO 删除角色 Dao
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}

	public ResultMessage selectRole(User user) throws Exception {
		List<Role> role = userDao.findRole(user.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询成功",role);
	}
	
	public ResultMessage userAccountExist(User user) throws Exception {
		int isExist = userDao.userNameExits(user.getAccount());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询成功",isExist);
	}
	
	public ResultMessage login(User user) {
		String password = MD5Utils.md5(user.getPassword());
		user.setPassword(password);
        User rUser = userDao.accountValid(user);
        ResultMessage resultMessage = null;
        if(rUser == null) {
        	resultMessage = new ResultMessage(false,ResultCode.NO_LOGIN,"用户名或者密码错误",null);
        }else {
        	resultMessage = new ResultMessage(true,ResultCode.SUCCESS,"登录成功",rUser);
        }
		return resultMessage;
	}
	
	public ResultMessage deletByList(List<User> list) {
		userDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage selectUserList(Page page) throws Exception {
		page.coutStartColum();
		long total = userDao.selectCount(page);
		List<User> users = userDao.selectByPage(page);
		PageInfo<User> pageInfo = new PageInfo<User>(page, total, users);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
}
