package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.RoleService;
import com.lp.gms.service.UserService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class RoleAction extends ActionSupport {

	@Autowired
    RoleService roleService;
	
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	/**
	 * 角色信息
	 */
	private String role;
	public void setUser(String role) {
		this.role = role;
	}
	
	/**
	 * 角色列表
	 */
	private String roleList;
	public void setRoleList(String roleList) {
		this.roleList = roleList;
	}
	
	
	public void selectRoleList() throws Exception {
		resultMessage = roleService.selectRoleList(JsonUtil.jsonToObject(page,Page.class));
	}
	
	public void selectAllRole() throws Exception {
		resultMessage = roleService.selectAll();
	}
}
