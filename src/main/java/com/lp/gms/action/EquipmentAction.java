package com.lp.gms.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Equipment;
import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.EquipmentService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class EquipmentAction extends ActionSupport {
	@Autowired
	private EquipmentService equipmentService;
	
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	/**
	 * 器材信息
	 */
	private String equipment;
	public void setEquipment(String equipment) {
		this.equipment = equipment;
	}
	
	/**
	 * 器材列表
	 */
	private String equipmentList;
	public void setEquipmentList(String equipmentList) {
		this.equipmentList = equipmentList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void addEquipment() throws Exception {
		resultMessage = equipmentService.addEquipment(JsonUtil.jsonToObject(equipment, Equipment.class));
	}
	
	@SuppressWarnings("unchecked")
	public void deleteEquipment() throws Exception {
		resultMessage = equipmentService.deleteEquipment((List<Equipment>) JsonUtil.jsonToObject(equipmentList, new TypeToken<List<Equipment>>(){}.getType()));
	}
	
	public void updateEquipment() throws Exception {
		resultMessage = equipmentService.updateEquipment(JsonUtil.jsonToObject(equipment, Equipment.class));
	}
	
	public void selectEquipmentList() throws Exception {
		resultMessage = equipmentService.selectEquipmentList(JsonUtil.jsonToObject(page, Page.class));
	}
	
	public void selectOneEquipment() throws Exception {
		resultMessage = equipmentService.selectOneEquipment(JsonUtil.jsonToObject(equipment, Equipment.class));
	}
}
