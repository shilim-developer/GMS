package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PlaceDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.Place;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class PlaceService {
	@Autowired
	private PlaceDao placeDao;
	
	public ResultMessage addPlace(Place place) throws Exception {
		placeDao.insert(place);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage deletePlace(List<Place> list) throws Exception {
		placeDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage updatePlace(Place place) throws Exception {
		placeDao.updateByPrimaryKey(place);
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
