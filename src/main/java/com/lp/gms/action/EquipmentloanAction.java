package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.Equipmentloan;
import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.EquipmentloanService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class EquipmentloanAction extends ActionSupport {
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;

	@Autowired
	private EquipmentloanService equipmentloanService;
	
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
	 * 器材租借记录
	 */
	private String equipmentloan;
	public void setEquipmentloan(String equipmentloan) {
		this.equipmentloan= equipmentloan;
	}
	
	
	@SuppressWarnings("unchecked")
	public void leaseEquipment() throws Exception {
		resultMessage = equipmentloanService.leaseEquipment(
				JsonUtil.jsonToObject(equipmentloan,Equipmentloan.class));
				
	}
	
	public void selectEquipmentloanList() throws Exception {
		resultMessage = equipmentloanService.selectEquipmentloanList(JsonUtil.jsonToObject(page, Page.class));
	}
	
	public void checkEquipmentloan() throws Exception {
		resultMessage = equipmentloanService.checkEquipmentloan(JsonUtil.jsonToObject(equipmentloan, Equipmentloan.class));
	}
}

