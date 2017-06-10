package com.lp.gms.service;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.EquipmentDao;
import com.lp.gms.model.Equipment;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class EquipmentService {
	@Autowired
	private EquipmentDao equipmentDao;
	
	public ResultMessage addEquipment(Equipment equipment) throws Exception {
		equipmentDao.insert(equipment);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	    }
		
		public ResultMessage deleteEquipment(List<Equipment> list) throws Exception {
			equipmentDao.deleteByList(list);
			return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
		}
		
		public ResultMessage updateEquipment(Equipment equipment) throws Exception {
			equipmentDao.updateByPrimaryKey(equipment);
			return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
		}
		
		public ResultMessage selectEquipmentList(Page page) throws Exception {
			page.coutStartColum();
			long total = equipmentDao.selectCount(page);
			List<Equipment> equipments = equipmentDao.selectByPage(page);
			PageInfo<Equipment> pageInfo = new PageInfo<Equipment>(page, total, equipments);
			return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
		}
		
		public ResultMessage selectOneEquipment(Equipment equipment) throws Exception {
			Equipment eq = equipmentDao.selectByPrimaryKey(equipment.getEquipmentid());
			return new ResultMessage(true,ResultCode.SUCCESS,"查询器材成功",eq);
		}
		
}


