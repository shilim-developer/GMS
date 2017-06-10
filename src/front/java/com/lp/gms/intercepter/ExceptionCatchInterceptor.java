package com.lp.gms.intercepter;

import java.lang.reflect.Field;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.JsonSyntaxException;
import com.lp.gms.constant.ResultCode;
import com.lp.gms.model.ResultMessage;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

/**
 * 异常捕获拦截器
 * @author shilim
 *
 */
public class ExceptionCatchInterceptor extends AbstractInterceptor {

	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * log4j实例对象
	 */
	private static Logger logger = LogManager.getLogger(ExceptionCatchInterceptor.class);

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		logger.debug("进入异常捕获拦截器");
		try {
			invocation.invoke();
		} catch (Exception e) {
			e.printStackTrace();
			ActionSupport action = (ActionSupport) invocation.getAction();
			Class<? extends Object> actionClass = action.getClass();
			Field resultMessage = null;
			for (Field tempField : actionClass.getDeclaredFields()) {
				if (tempField.getName().equals("resultMessage")) {
					tempField.setAccessible(true);
					resultMessage = tempField;
					break;
				}
			}
			
			if (resultMessage != null) {
				ResultMessage rs= new ResultMessage();
				if (IllegalArgumentException.class.isAssignableFrom(e.getClass()) || 
						JsonSyntaxException.class.isAssignableFrom(e.getClass())) {
					rs.setServiceResult(ResultCode.ILLEGAL_ARGUMENT);
					rs.setResultInfo("参数错误");
				} else if (NullPointerException.class.isAssignableFrom(e.getClass())) {
					rs.setServiceResult(ResultCode.ILLEGAL_ARGUMENT);
					rs.setResultInfo("参数错误");
				} else {
					rs.setServiceResult(ResultCode.FAIL);
				    rs.setResultInfo("操作失败");
				}
				resultMessage.set(action, rs);
			}
		}
		
		logger.debug("退出异常捕获拦截器");
		return null;
	}

}
