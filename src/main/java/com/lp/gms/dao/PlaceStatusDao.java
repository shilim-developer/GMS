package com.lp.gms.dao;

import java.util.List;
import java.util.Map;

import com.lp.gms.model.PlaceLeaseRecord;
import com.lp.gms.model.PlaceStatus;

public interface PlaceStatusDao {
	/**
	 * 增加状态列表
	 * @param map
	 * @return
	 */
	int insertBatch(Map<String, Object> map);
	
	/**
	 * 根据场地ID获取状态列表
	 * @param id
	 * @return
	 */
	List<PlaceStatus> selectByPlaceId(Integer id);

	/**
	 * 批量修改场地状态
	 * @param record
	 * @return
	 */
	int updateByPlaceStatus(List<PlaceStatus> placeStatusList);
	
	/**
	 * 通过租借记录修改场地状态
	 * @param placeLeaseRecord
	 * @return
	 */
	int updateByPlaceLeaseRecord(PlaceLeaseRecord placeLeaseRecord);
	
    int deleteByPrimaryKey(Long id);


    int insertSelective(PlaceStatus record);


    int updateByPrimaryKeySelective(PlaceStatus record);

}