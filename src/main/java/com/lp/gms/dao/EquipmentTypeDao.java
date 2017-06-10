package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.EquipmentType;
import com.lp.gms.model.Page;



public interface EquipmentTypeDao {
/**
 *  添加器材类型
 * @param equipmentType
 * @return
 */
    int insert(EquipmentType equipmentType);

    /**
	 * 删除器材类型
	 * @param equipmentTypes
	 */
	void deleteByList(List<EquipmentType> equipmentTypes);
	
	/**
	 * 更新器器材类型
	 * @param equipmentType
	 * @return
	 */
	int updateByPrimaryKey(EquipmentType equipmentType);
	
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
	List<EquipmentType> selectByPage(Page page);
	
	/**
	 * 通过id查询器材类型
	 * @param typeid
	 * @return
	 */
    EquipmentType selectByPrimaryKey(Integer typeid);

    
}