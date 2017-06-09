package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PlaceLeaseRecordDao;
import com.lp.gms.dao.PlaceStatusDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.Place;
import com.lp.gms.model.PlaceLeaseRecord;
import com.lp.gms.model.PlaceStatus;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class PlaceLeaseRecordService {
	@Autowired
	private PlaceLeaseRecordDao placeLeaseRecordDao;
	@Autowired
	private PlaceStatusDao placeStatusDao;
	
	public ResultMessage leasePlace(PlaceLeaseRecord placeLeaseRecord,List<PlaceStatus> placeStatusList) throws Exception {
		placeLeaseRecordDao.insert(placeLeaseRecord);
		for(PlaceStatus placeStatus: placeStatusList ) {
			placeStatus.setPlaceStatus("已预订");
		}
		placeStatusDao.updateByPlaceStatus(placeStatusList);
		return new ResultMessage(true,ResultCode.SUCCESS,"预定成功",null);
	}
	
	public ResultMessage selectPlaceLeaseRecordList(Page page) throws Exception {
		page.coutStartColum();
		long total = placeLeaseRecordDao.selectCount(page);
		List<PlaceLeaseRecord> placeLeaseRecords = placeLeaseRecordDao.selectByPage(page);
		PageInfo<PlaceLeaseRecord> pageInfo = new PageInfo<PlaceLeaseRecord>(page, total, placeLeaseRecords);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
	
	public ResultMessage checkPlaceLeaseRecord(PlaceLeaseRecord placeLeaseRecord) throws Exception {
		placeLeaseRecordDao.updateByPrimaryKey(placeLeaseRecord);
		if(placeLeaseRecord.equals("审核通过")) {
			placeLeaseRecord.setCheckStatus("已租借");
		} else {
			placeLeaseRecord.setCheckStatus("空闲");
		}
		placeStatusDao.updateByPlaceLeaseRecord(placeLeaseRecord);
		return new ResultMessage(true,ResultCode.SUCCESS,"审核成功",null);
	}
}
