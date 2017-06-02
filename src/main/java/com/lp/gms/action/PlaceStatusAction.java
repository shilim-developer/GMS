package com.lp.gms.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.PlaceStatusService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
public class PlaceStatusAction extends ActionSupport {
	@Autowired
	private PlaceStatusService placeStatusService;

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
	 * 场地状态
	 */
	private String placeStatus;
	public void setPlaceStatus(String placeStatus) {
		this.placeStatus = placeStatus;
	}
	
	/**
	 * 通过场地id获取场地状态列表
	 * @throws Exception
	 */
	public void getPlaceStatusListByPlaceId() throws Exception {
		resultMessage = placeStatusService.selectPlaceStatusList(JsonUtil.jsonToObject(placeStatus, PlaceStatus.class));
	}
}
