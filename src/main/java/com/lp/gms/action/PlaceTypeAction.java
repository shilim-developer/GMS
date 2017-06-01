package com.lp.gms.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Page;
import com.lp.gms.model.PlaceType;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.PlaceTypeService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class PlaceTypeAction extends ActionSupport {
	@Autowired
	private PlaceTypeService placeTypeService;
	
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
	 * 场地类型信息
	 */
	private String placeType;
	public void setPlaceType(String placeType) {
		this.placeType = placeType;
	}
	
	/**
	 * 场地类型列表
	 */
	private String placeTypeList;
	public void setPlaceTypeList(String placeTypeList) {
		this.placeTypeList = placeTypeList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void addPlaceType() throws Exception {
		resultMessage = placeTypeService.addPlaceType(JsonUtil.jsonToObject(placeType, PlaceType.class));
	}
	
	@SuppressWarnings("unchecked")
	public void deletePlaceType() throws Exception {
		resultMessage = placeTypeService.deletePlaceType((List<PlaceType>) JsonUtil.jsonToObject(placeTypeList, new TypeToken<List<PlaceType>>(){}.getType()));
	}
	
	public void updatePlaceType() throws Exception {
		resultMessage = placeTypeService.updatePlaceType(JsonUtil.jsonToObject(placeType, PlaceType.class));
	}
	
	public void selectPlaceTypeList() throws Exception {
		resultMessage = placeTypeService.selectPlaceTypeList(JsonUtil.jsonToObject(page, Page.class));
	}
	
	public void selectOnePlaceType() throws Exception {
		resultMessage = placeTypeService.selectOnePlaceType(JsonUtil.jsonToObject(placeType, PlaceType.class));
	}
}
