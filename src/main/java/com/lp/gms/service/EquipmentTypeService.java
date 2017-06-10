package com.lp.gms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.EquipmentTypeDao;
import com.lp.gms.model.EquipmentType;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class EquipmentTypeService {
	@Autowired
	private EquipmentTypeDao equipmentTypeDao;
	
	public ResultMessage addEquipmentType(EquipmentType equipmentType) throws Exception {
		equipmentTypeDao.insert(equipmentType);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	    }
		
		public ResultMessage deleteEquipmentType(List<EquipmentType> equipmentTypes) throws Exception {
			equipmentTypeDao.deleteByList(equipmentTypes);
			return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
		}
		
		public ResultMessage updateEquipmentType(EquipmentType equipmentType) throws Exception {
			equipmentTypeDao.updateByPrimaryKey(equipmentType);
			return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
		}
		
		public ResultMessage selectEquipmentTypeList(Page page) throws Exception {
			page.coutStartColum();
			long total = equipmentTypeDao.selectCount(page);
			List<EquipmentType> equipmentTypes = equipmentTypeDao.selectByPage(page);
			PageInfo<EquipmentType> pageInfo = new PageInfo<EquipmentType>(page, total, equipmentTypes);
			return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
		}
		
		public ResultMessage selectOneEquipmentType(EquipmentType equipmentType) throws Exception {
			EquipmentType et = equipmentTypeDao.selectByPrimaryKey(equipmentType.getTypeid());
			return new ResultMessage(true,ResultCode.SUCCESS,"查询器材类型成功",et);
		}
		
}

