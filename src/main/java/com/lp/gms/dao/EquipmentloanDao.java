package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Equipmentloan;
import com.lp.gms.model.Page;

public interface EquipmentloanDao {
	/**
	 * 租借预定
	 * @param equipmentloan
	 * @return
	 */
	int insert(Equipmentloan equipmentloan);
	
	/**
	 * 查询总记录数
	 * @param page
	 * @return tatal
	 */
	long selectCount(Page page);
	
	/**
	 * 分页查询器材列表
	 * @param page
	 * @return
	 */
	List<Equipmentloan> selectByPage(Page page);
	
	/**
	 * 器材审核
	 * @param equipmentloan
	 * @return
	 */
	int updateByPrimaryKey(Equipmentloan equipmentloan);
	
    int deleteByPrimaryKey(Integer equipmentloanid);

    int insertSelective(Equipmentloan equipmentloan);

    Equipmentloan selectByPrimaryKey(Integer equipmentloanid);

    int updateByPrimaryKeySelective(Equipmentloan equipmentloan);

}