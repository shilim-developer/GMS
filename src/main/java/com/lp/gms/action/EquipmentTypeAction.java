package com.lp.gms.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.EquipmentType;
import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.EquipmentTypeService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class EquipmentTypeAction extends ActionSupport {
	@Autowired
	private EquipmentTypeService equipmentTypeService;
	
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
	 * 器材类型信息
	 */
	private String equipmentType;
	public void setEquipmentType(String equipmentType) {
		this.equipmentType = equipmentType;
	}
	
	/**
	 * 器材类型列表
	 */
	private String equipmentTypeList;
	public void setEquipmentTypeList(String equipmentTypeList) {
		this.equipmentTypeList = equipmentTypeList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void addEquipmentType() throws Exception {
		resultMessage = equipmentTypeService.addEquipmentType(JsonUtil.jsonToObject(equipmentType, EquipmentType.class));
	}
	
	@SuppressWarnings("unchecked")
	public void deleteEquipmentType() throws Exception {
		resultMessage = equipmentTypeService.deleteEquipmentType((List<EquipmentType>) JsonUtil.jsonToObject(equipmentTypeList, new TypeToken<List<EquipmentType>>(){}.getType()));
	}
	
	public void updateEquipmentType() throws Exception {
		resultMessage = equipmentTypeService.updateEquipmentType(JsonUtil.jsonToObject(equipmentType, EquipmentType.class));
	}
	
	public void selectEquipmentTypeList() throws Exception {
		resultMessage = equipmentTypeService.selectEquipmentTypeList(JsonUtil.jsonToObject(page, Page.class));
	}
	
	public void selectOneEquipmentType() throws Exception {
		resultMessage = equipmentTypeService.selectOneEquipmentType(JsonUtil.jsonToObject(equipmentType, EquipmentType.class));
	}
}
