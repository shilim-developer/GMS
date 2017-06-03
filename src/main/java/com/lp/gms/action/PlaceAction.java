package com.lp.gms.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Page;
import com.lp.gms.model.Place;
import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.PlaceService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class PlaceAction extends ActionSupport {
	@Autowired
	PlaceService placeService;

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
	 * 场地信息
	 */
	private String place;
	public void setPlace(String place) {
		this.place = place;
	}
	
	/**
	 * 场地列表
	 */
	private String placeList;
	public void setPlaceList(String placeList) {
		this.placeList = placeList;
	}
	
	/**
	 * 场地状态列表
	 */
	private String placeStatusList;
	public void setPlaceStatusList(String placeStatusList) {
		this.placeStatusList = placeStatusList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	@SuppressWarnings("unchecked")
	public void addPlace() throws Exception {
		System.out.println(placeStatusList);
		resultMessage = placeService.addPlace(
				JsonUtil.jsonToObject(place, Place.class),
				(List<PlaceStatus>)JsonUtil.jsonToObject(placeStatusList, new TypeToken<List<PlaceStatus>>(){}.getType()));
	}
	
	@SuppressWarnings("unchecked")
	public void deletePlace() throws Exception {
		resultMessage = placeService.deletePlace((List<Place>)JsonUtil.jsonToObject(placeList, new TypeToken<List<Place>>(){}.getType()));
	}
	
	public void updatePlace() throws Exception {
		resultMessage = placeService.updatePlace(
				JsonUtil.jsonToObject(place, Place.class),
				(List<PlaceStatus>)JsonUtil.jsonToObject(placeStatusList, new TypeToken<List<PlaceStatus>>(){}.getType()));
	}
	
	public void selectPlaceList() throws Exception {
		resultMessage = placeService.selectPlaceList(JsonUtil.jsonToObject(page,Page.class));
	}
	
	public void selectOnePlace() throws Exception {
		resultMessage = placeService.selectOnePlace(JsonUtil.jsonToObject(place,Place.class));
	}
}
