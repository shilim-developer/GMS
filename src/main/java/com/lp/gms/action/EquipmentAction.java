package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;

import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.EquipmentService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

public class EquipmentAction extends ActionSupport {
	@Autowired
	EquipmentService equipmentService;

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void selectEquipmentList() throws Exception {
		resultMessage = equipmentService.selectEquipment(JsonUtil.jsonToObject(page,Page.class));
	}
	
}

