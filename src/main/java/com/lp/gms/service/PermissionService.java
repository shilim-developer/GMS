package com.lp.gms.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PermissionDao;
import com.lp.gms.dao.RolePermissionDao;
import com.lp.gms.dao.UserDao;
import com.lp.gms.dao.UserRoleDao;
import com.lp.gms.model.Permission;
import com.lp.gms.model.ResultMessage;


@Service
@Transactional(rollbackFor = Exception.class)
public class PermissionService {
	@Autowired
	private PermissionDao permissionDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private RolePermissionDao rolePermissionDao;
	@Autowired
	private UserRoleDao userRoleDao;
	
	public ResultMessage deleteById(Permission permission) throws Exception {
		permissionDao.deleteByPrimaryKey(permission.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage insert(Permission record) throws Exception {
		permissionDao.insert(record);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage insertSelective(Permission record) throws Exception {
		permissionDao.insert(record);
		//每添加一个权限，都往【系统管理员 	888888】里添加一次。保证系统管理员有最大的权限
//		addPermission2Role(new Long(1), String.valueOf(record.getId()));
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	

}
