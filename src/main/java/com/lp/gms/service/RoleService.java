package com.lp.gms.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.RoleDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.Role;
import com.lp.gms.model.User;

@Service
@Transactional(rollbackFor = Exception.class)
public class RoleService {
	@Autowired
	private RoleDao roleDao;
	
	public ResultMessage deleteById(Role role) throws Exception {
		roleDao.deleteByPrimaryKey(role.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage insert(Role role) throws Exception {
		System.out.println("sasasaasasasasasa"+role);
		roleDao.insert(role);
		return new ResultMessage(true,ResultCode.SUCCESS,"插入成功",null);
	}
	
	public ResultMessage insertSelective(Role record) throws Exception {
		roleDao.insertSelective(record);
		return new ResultMessage(true,ResultCode.SUCCESS,"插入成功",null);
	}
	
	public ResultMessage selectByPrimaryKey(Role role) throws Exception {
		Role uRole = roleDao.selectByPrimaryKey(role.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"查找成功",uRole);
	}
	
	public ResultMessage selectRoleByUserId(User user) throws Exception {
	    Set<String> role = roleDao.findRoleByUserId(user.getId());
	    return new ResultMessage(true,ResultCode.SUCCESS,"查找成功",role);
	}
	
	public ResultMessage updateByPrimaryKey(Role role) throws Exception {
		roleDao.updateByPrimaryKey(role);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	public ResultMessage updateByPrimarySelective(Role record) throws Exception {
		roleDao.updateByPrimaryKey(record);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	public ResultMessage selectRoleList(Page page) throws Exception {
		page.coutStartColum();
		long total = roleDao.selectCount(page);
		List<Role> roles = roleDao.selectByPage(page);
		PageInfo<Role> pageInfo = new PageInfo<Role>(page, total, roles);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
	
	public ResultMessage selectAll() throws Exception {
		List<Role> rList = roleDao.selectAll();
		return new ResultMessage(true,ResultCode.SUCCESS,"查找成功",rList);
	}

	public ResultMessage deleteByList(List<Role> list) throws Exception {
		roleDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
}
