package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.TimeOptionDao;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.model.TimeOption;

@Service
@Transactional(rollbackFor = Exception.class)
public class TimeOptionService {
	@Autowired
	private TimeOptionDao timeOptionDao;
	
	public ResultMessage selectAllTimeOption() throws Exception {
		List<TimeOption> timeOptionList = timeOptionDao.selectAll();
		return new ResultMessage(true, ResultCode.SUCCESS, "查询成功", timeOptionList);
	}
}
