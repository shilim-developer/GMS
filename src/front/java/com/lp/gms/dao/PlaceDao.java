package com.lp.gms.dao;

import java.util.List;
import com.lp.gms.model.Page;
import com.lp.gms.model.Place;

/**
 * 场地DAO
 * @author shilim
 *
 */
public interface PlaceDao {
	/**
	 * 添加场地
	 * @param place
	 * @return
	 */
	int insert(Place place);
	
	/**
	 * 删除场地
	 * @param places
	 */
	void deleteByList(List<Place> places);
	
	/**
	 * 修改场地
	 * @param place
	 * @return
	 */
	int updateByPrimaryKey(Place place);
	
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
	List<Place> selectByPage(Page page);
	
	/**
	 * 通过id查询场地
	 * @param id
	 * @return
	 */
    Place selectByPrimaryKey(Integer id);

}