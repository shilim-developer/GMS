package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Equipment;
import com.lp.gms.model.EquipmentType;
import com.lp.gms.model.Page;

public interface EquipmentDao {
	/**
	 *  添加器材类型
	 * @param equipment
	 * @return
	 */
	    int insert(Equipment equipment);

	    /**
		 * 删除器材类型
		 * @param equipments
		 */
		void deleteByList(List<Equipment> equipments);
		
		/**
		 * 更新器器材类型
		 * @param equipment
		 * @return
		 */
		int updateByPrimaryKey(Equipment equipment);
		
		/**
		 * 查询总记录数
		 * @param page
		 * @return total
		 */
		long selectCount(Page page);
		
		/**
		 * 分页查询器材类型列表
		 * @param page
		 * @return
		 */
		List<Equipment> selectByPage(Page page);
		
		/**
		 * 通过id查询器材
		 * @param equipmentid
		 * @return
		 */
	    Equipment selectByPrimaryKey(Integer equipmentid);

}