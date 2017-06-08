package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PlaceDao;
import com.lp.gms.dao.PlaceTypeDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.PlaceType;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class PlaceTypeService {
	@Autowired
	private PlaceTypeDao placeTypeDao;
	@Autowired
	private PlaceDao placeDao;
	
	public ResultMessage addPlaceType(PlaceType placeType) throws Exception {
		placeTypeDao.insert(placeType);
		return new ResultMessage(true, ResultCode.SUCCESS, "添加成功", null);
	}
	
	public ResultMessage deletePlaceType(List<PlaceType> placeTypes) throws Exception {
		for(PlaceType placeType : placeTypes) {
			if(placeDao.selectByPlaceTypeId(placeType.getId()) != null) {
				return new ResultMessage(true, ResultCode.FAIL, "该类型正在被使用", null);
			}
		}
		placeTypeDao.deleteByList(placeTypes);
		return new ResultMessage(true, ResultCode.SUCCESS, "删除成功", null);
	}
	
	public ResultMessage updatePlaceType(PlaceType placeType) throws Exception {
		placeTypeDao.updateByPrimaryKey(placeType);
		return new ResultMessage(true, ResultCode.SUCCESS, "修改成功", null);
	}
	
	public ResultMessage selectPlaceTypeList(Page page) throws Exception {
		page.coutStartColum();
		long total = placeTypeDao.selectCount(page);
		List<PlaceType> placeTypes = placeTypeDao.selectByPage(page);
		PageInfo<PlaceType> pageInfo = new PageInfo<PlaceType>(page, total, placeTypes);
		return new ResultMessage(true, ResultCode.SUCCESS, "分页成功", pageInfo);
	}
	
	public ResultMessage selectOnePlaceType(PlaceType placeType) throws Exception {
		PlaceType rPlaceType = placeTypeDao.selectByPrimaryKey(placeType.getId());
		return new ResultMessage(true, ResultCode.SUCCESS, "查询场地类型成功", rPlaceType);
	}
}
