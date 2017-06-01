package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.EquipmentloanDao;
import com.lp.gms.model.Equipmentloan;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class EquipmentloanService {
	@Autowired
	private EquipmentloanDao equipmentloanDao;
	
	public ResultMessage addEquipmentloan(Equipmentloan equipmentloan) throws Exception {
		equipmentloanDao.insert(equipmentloan);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	    }
		
		public ResultMessage deleteEquipmentloan(List<Equipmentloan> list) throws Exception {
			equipmentloanDao.deleteByList(list);
			return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
		}
		
		public ResultMessage updateEquipmentloan(Equipmentloan equipmentloan) throws Exception {
			equipmentloanDao.updateByPrimaryKey(equipmentloan);
			return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
		}
		
		public ResultMessage selectEquipmentloan(Page page) throws Exception {
			page.coutStartColum();
			long total = equipmentloanDao.selectCount(page);
			List<Equipmentloan> equipmentloans = equipmentloanDao.selectByPage(page);
			PageInfo<Equipmentloan> pageInfo = new PageInfo<Equipmentloan>(page, total, equipmentloans);
			return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
		}
		
		public ResultMessage selectEquipmentloan(Equipmentloan equipmentloan) throws Exception {
			Equipmentloan et = equipmentloanDao.selectByPrimaryKey(equipmentloan.getEquipmentloanid());
			return new ResultMessage(true,ResultCode.SUCCESS,"查询器材租借成功",et);
		}
		
}
