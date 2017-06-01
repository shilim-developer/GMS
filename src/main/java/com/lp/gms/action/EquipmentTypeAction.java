package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.EquipmentTypeService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class EquipmentTypeAction extends ActionSupport {
	@Autowired
	EquipmentTypeService equipmentTypeService;

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
	
	public void selectEquipmentTypeList() throws Exception {
		resultMessage = equipmentTypeService.selectEquipmentType(JsonUtil.jsonToObject(page,Page.class));
	}
	
}
