package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.TimeOptionService;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class TimeOptionAction extends ActionSupport {
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	@Autowired
	private TimeOptionService timeOptionService;
	
	public void selectAllTimeOption() throws Exception {
		resultMessage = timeOptionService.selectAllTimeOption();
	}
}
