package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Equipment;
import com.lp.gms.model.Page;

public interface EquipmentDao {
	/**
	 *  添加器材
	 * @param equipment
	 * @return
	 */
	    int insert(Equipment equipment);

	    /**
		 * 删除器材
		 * @param equipments
		 */
		void deleteByList(List<Equipment> equipments);
		
		/**
		 * 更新器器材
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
		 * 分页查询器材列表
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