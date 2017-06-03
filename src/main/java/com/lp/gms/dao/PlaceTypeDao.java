package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Page;
import com.lp.gms.model.PlaceType;

/**
 * 场地类型DAO
 * @author shilim
 *
 */
public interface PlaceTypeDao {
	/**
	 * 添加场地类型
	 * @param placeType
	 * @return
	 */
	int insert(PlaceType placeType);
	
	/**
	 * 删除场地类型
	 * @param placeTypes
	 * @return
	 */
    int deleteByList(List<PlaceType> placeTypes);

    /**
     * 修改场地类型
     * @param placeType
     * @return
     */
    int updateByPrimaryKey(PlaceType placeType);
    
    /**
	 * 查询总记录数
	 * @param page
	 * @return tatal
	 */
	long selectCount(Page page);
	
	/**
	 * 分页查询场地列表
	 * @param page
	 * @return
	 */
	List<PlaceType> selectByPage(Page page);
	
	/**
	 * 通过id查询场地类型
	 * @param id
	 * @return
	 */
	PlaceType selectByPrimaryKey(Integer id);

}