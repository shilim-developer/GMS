package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Equipmentloan;
import com.lp.gms.model.Page;

public interface EquipmentloanDao {
	/**
	 *  添加器材租借
	 * @param equipmentloan
	 * @return
	 */
	    int insert(Equipmentloan equipmentloan);

	    /**
		 * 删除器材类型
		 * @param equipmentloans
		 */
		void deleteByList(List<Equipmentloan> equipmentloans);
		
		/**
		 * 更新器器材租借
		 * @param equipmentloan
		 * @return
		 */
		int updateByPrimaryKey(Equipmentloan equipmentloan);
		
		/**
		 * 查询总记录数
		 * @param page
		 * @return total
		 */
		long selectCount(Page page);
		
		/**
		 * 分页查询器材租借列表
		 * @param page
		 * @return
		 */
		List<Equipmentloan> selectByPage(Page page);
		
		/**
		 * 通过器材租借id查询
		 * @param equipmentloanId
		 * @return
		 */
	    Equipmentloan selectByPrimaryKey(Integer equipmentloanId);

}