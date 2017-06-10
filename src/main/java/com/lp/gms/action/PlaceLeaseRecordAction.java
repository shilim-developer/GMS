package com.lp.gms.action;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Page;
import com.lp.gms.model.PlaceLeaseRecord;
import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.PlaceLeaseRecordService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class PlaceLeaseRecordAction extends ActionSupport {
	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;

	@Autowired
	private PlaceLeaseRecordService placeLeaseRecordService;
	
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
	 * 场地租借记录
	 */
	private String placeLeaseRecord;
	public void setPlaceLeaseRecord(String placeLeaseRecord) {
		this.placeLeaseRecord = placeLeaseRecord;
	}
	
	/**
	 * 场地状态
	 */
	private String placeStatusList;
	public void setPlaceStatusList(String placeStatusList) {
		this.placeStatusList = placeStatusList;
	}
	
	@SuppressWarnings("unchecked")
	public void leasePlace() throws Exception {
		resultMessage = placeLeaseRecordService.leasePlace(
				JsonUtil.jsonToObject(placeLeaseRecord, PlaceLeaseRecord.class),
				(List<PlaceStatus>)JsonUtil.jsonToObject(placeStatusList, new TypeToken<List<PlaceStatus>>(){}.getType()));
	}
	
	public void selectPlaceLeaseRecordList() throws Exception {
		resultMessage = placeLeaseRecordService.selectPlaceLeaseRecordList(JsonUtil.jsonToObject(page, Page.class));
	}
	
	public void checkPlaceLeaseRecord() throws Exception {
		resultMessage = placeLeaseRecordService.checkPlaceLeaseRecord(JsonUtil.jsonToObject(placeLeaseRecord, PlaceLeaseRecord.class));
	}
}
