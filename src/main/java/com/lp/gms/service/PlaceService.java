package com.lp.gms.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PlaceDao;
import com.lp.gms.dao.PlaceStatusDao;
import com.lp.gms.dao.TimeOptionDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.Place;
import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.TimeOption;

@Service
@Transactional(rollbackFor = Exception.class)
public class PlaceService {
	@Autowired
	private PlaceDao placeDao;
	@Autowired
	private PlaceStatusDao placeStatusDao;
	
	public ResultMessage addPlace(Place place,List<PlaceStatus> placeStatusList) throws Exception {
		placeDao.insert(place);
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("placeId", place.getId());
		map.put("placeStatusList", placeStatusList);
		placeStatusDao.insertBatch(map);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage deletePlace(List<Place> list) throws Exception {
		placeDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage updatePlace(Place place,List<PlaceStatus> placeStatusList) throws Exception {
		placeDao.updateByPrimaryKey(place);
		placeStatusDao.updateByPlaceStatus(placeStatusList);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	public ResultMessage selectPlaceList(Page page) throws Exception {
		page.coutStartColum();
		long total = placeDao.selectCount(page);
		List<Place> places = placeDao.selectByPage(page);
		PageInfo<Place> pageInfo = new PageInfo<Place>(page, total, places);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
	
	public ResultMessage selectOnePlace(Place place) throws Exception {
		Place rPlace = placeDao.selectByPrimaryKey(place.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询场地成功",rPlace);
	}
	
}
