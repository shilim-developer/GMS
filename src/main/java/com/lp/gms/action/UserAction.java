package com.lp.gms.action;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.User;
import com.lp.gms.service.UserService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class UserAction extends ActionSupport {
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	@Autowired
	private UserService userService;
	
	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	/**
	 * 用户信息
	 */
	private String user;
	public void setUser(String user) {
		this.user = user;
	}
	
	/**
	 * 登录
	 * @throws Exception
	 */
	public void login() throws Exception {
		resultMessage = userService.login(JsonUtil.jsonToObject(user, User.class));
		if(resultMessage.getResultParam() != null) {
			Map<String, Object> session = ActionContext.getContext().getSession();
			session.put("user", resultMessage.getResultParam());
		}
	}
}
