package com.lp.gms.action;

<<<<<<< HEAD
import java.util.List;
=======
>>>>>>> origin/jerry
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

<<<<<<< HEAD
import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Page;
import com.lp.gms.model.Place;
=======
>>>>>>> origin/jerry
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.User;
import com.lp.gms.service.UserService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class UserAction extends ActionSupport {
<<<<<<< HEAD
	@Autowired
    UserService userService;
	
=======
>>>>>>> origin/jerry
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
<<<<<<< HEAD
	/**
	 * 结果信息
	 */
	private ResultMessage resultMessage;
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	/**
=======
	@Autowired
	private UserService userService;
	
	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	/**
>>>>>>> origin/jerry
	 * 用户信息
	 */
	private String user;
	public void setUser(String user) {
		this.user = user;
	}
	
	/**
<<<<<<< HEAD
	 * 用户列表
	 */
	private String userList;
	public void setUserList(String userList) {
		this.userList = userList;
	}
	
	public void selectOneUser() throws Exception {
		resultMessage = userService.selectUser(JsonUtil.jsonToObject(user,User.class));
	}
	
	public void login() throws Exception {
		resultMessage = userService.login(JsonUtil.jsonToObject(user,User.class));
		User user = (User) resultMessage.getResultParam();
		if(user == null) return;
		String roleName = user.getRole().getDescription();
		if(resultMessage.getResultParam() != null) {
			Map<String, Object> session = ActionContext.getContext().getSession();
			session.put("user", resultMessage.getResultParam());
			session.put("roleName", roleName);
		}
	}
	
	@SuppressWarnings("unchecked")
	public void deleteUser() throws Exception {
		resultMessage = userService.deletByList((List<User>)JsonUtil.jsonToObject(userList, new TypeToken<List<Place>>(){}.getType()));
	}
	
	public void addUser() throws Exception {
		resultMessage = userService.addUser(JsonUtil.jsonToObject(user,User.class));
	}
	
	public void selectUserList() throws Exception {
		resultMessage = userService.selectUserList(JsonUtil.jsonToObject(page,Page.class));
	}
	
	public void updateUser() throws Exception {
		resultMessage = userService.updateUser(JsonUtil.jsonToObject(user,User.class));
	}
	
=======
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
>>>>>>> origin/jerry
}
