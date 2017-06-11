package com.lp.gms.intercepter;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Field;

import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.struts2.ServletActionContext;

import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

/**
 * 结果处理拦截器，将resultMessage转换成json字符串
 * @author shilim
 *
 */
public class ResultMessageInterceptor extends AbstractInterceptor {

	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * log4j实例对象
	 */
	private static Logger logger = LogManager.getLogger(ResultMessageInterceptor.class);

	@Override
	public String intercept(final ActionInvocation invocation) throws Exception {
		logger.debug("进入ResultMessage拦截器");
		invocation.invoke();
		ActionSupport action = (ActionSupport) invocation.getAction();
		Class<? extends Object> actionClass = action.getClass();
		Object resultMessage = null;
		for (Field tempField : actionClass.getDeclaredFields()) {
			if (tempField.getName().equals("resultMessage")) {
				tempField.setAccessible(true);
				resultMessage = tempField.get(action);
				break;
			}
		}
		if (resultMessage != null) {
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

		logger.debug("退出ResultMessage拦截器");
		return null;
	}

}
