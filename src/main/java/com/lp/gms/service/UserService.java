package com.lp.gms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.UserDao;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.User;

@Service
@Transactional(rollbackFor = Exception.class)
public class UserService {
	@Autowired
	private UserDao userDao;
	
	public ResultMessage login(User user) throws Exception {
		User rUser = userDao.selectByUser(user);
		ResultMessage resultMessage = null;
		if(rUser == null) {
			resultMessage = new ResultMessage(false, ResultCode.NO_LOGIN, "用户名或者密码错误", null);
		} else {
			resultMessage = new ResultMessage(true, ResultCode.SUCCESS, "登录成功", rUser);
		}
		return resultMessage;
	}
}
