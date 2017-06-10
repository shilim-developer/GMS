package com.lp.gms.dao;

import java.util.List;

import com.lp.gms.model.TimeOption;

public interface TimeOptionDao {
	/**
	 * 查询所有日期
	 * @return
	 */
    List<TimeOption> selectAll();
    
    /**
     * 通过id查询日期
     * @param id
     * @return
     */
    TimeOption selectByPrimaryKey(Integer id);
}