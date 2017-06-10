package com.lp.gms.intercepter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class RoleInterceptor extends AbstractInterceptor{

	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * log4j实例对象
	 */
	private static Logger logger = LogManager.getLogger(LoginInterceptor.class);
	
	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
	    String nameSpace = invocation.getProxy().getNamespace();
        Map<String, Object> session = ActionContext.getContext().getSession();
        String roleName = (String) session.get("roleName");
	    if(nameSpace.contains("Front")) {
            if(!roleName.equals("普通用户")) {
            	noPermissionReturn(new ResultMessage(false, ResultCode.NO_PERMISSION, "没有权限登录", null));
            }else{
	    	invocation.invoke();
            }
	    }else if(nameSpace.contains("Manage")){
        	if(!roleName.contains("管理员")) {
        		noPermissionReturn(new ResultMessage(false, ResultCode.NO_PERMISSION, "没有权限登录", null));
        	}else{
	    	invocation.invoke();
            }
        }
		return null;
	}

	public void noPermissionReturn(ResultMessage resultMessage) throws Exception {
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setContentType("text/html;charset=UTF8");
		PrintWriter out = null;
		try {
			out = response.getWriter();
			out.println(JsonUtil.objectToJson(resultMessage));
		} catch (IOException e) {
			logger.error("Exception:", e);
			e.printStackTrace();
		}
		out.flush();
		out.close();
	}
	
}
