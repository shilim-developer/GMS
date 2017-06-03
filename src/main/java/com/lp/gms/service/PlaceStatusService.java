package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PlaceStatusDao;
import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;

@Service
public class PlaceStatusService {
	@Autowired
	private PlaceStatusDao placeStatusDao;
	
	public ResultMessage selectPlaceStatusList(PlaceStatus placeStatus) throws Exception {
		List<PlaceStatus> placeStatusList = placeStatusDao.selectByPlaceId(placeStatus.getPlaceId());
		 return new ResultMessage(true, ResultCode.SUCCESS,"查询场地状态成功",placeStatusList);
	}
}
