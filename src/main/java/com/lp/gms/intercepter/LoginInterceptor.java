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

/**
 * 登录验证拦截器
 * @author shilim
 *
 */
public class LoginInterceptor extends AbstractInterceptor {

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
		String namespace = invocation.getProxy().getNamespace();  
        String methodName = invocation.getProxy().getMethod();
        if(namespace.contains("Front") && methodName.equals("login") ) {
        	invocation.invoke();
        } else if(namespace.contains("Manage") && methodName.equals("login") ){
        	invocation.invoke();
        }
        else if (namespace.contains("Manage") || namespace.contains("Front")) {
        	Map<String, Object> session = ActionContext.getContext().getSession();
        	if(session.get("user") == null) {
        		noLoginReturn(new ResultMessage(false, ResultCode.NO_LOGIN, "没有登录", null));
        	} else {
        		invocation.invoke();
        	}
        }
		return null;
	}
	
	public void noLoginReturn(ResultMessage resultMessage) throws Exception {
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
