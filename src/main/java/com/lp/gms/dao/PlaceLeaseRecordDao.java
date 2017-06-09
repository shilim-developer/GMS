package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.Page;
import com.lp.gms.model.PlaceLeaseRecord;

public interface PlaceLeaseRecordDao {
	/**
	 * 租借预定
	 * @param placeLeaseRecord
	 * @return
	 */
	int insert(PlaceLeaseRecord placeLeaseRecord);
	
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
	List<PlaceLeaseRecord> selectByPage(Page page);
	
	/**
	 * 场地审核
	 * @param placeLeaseRecord
	 * @return
	 */
	int updateByPrimaryKey(PlaceLeaseRecord placeLeaseRecord);
	
    int deleteByPrimaryKey(Integer id);

    int insertSelective(PlaceLeaseRecord record);

    PlaceLeaseRecord selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PlaceLeaseRecord record);

}