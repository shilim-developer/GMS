package com.lp.gms.dao;

import java.util.List;
import com.lp.gms.model.Game;
import com.lp.gms.model.Page;

/**
 * 赛事Dao
 * @author qishao
 * 
 */

public interface GameDao {
	/**
	 * 添加赛事
	 * @param game
	 * @return
	 */
	int insert(Game game);
	
	/**
	 * 删除赛事
	 * @param games
	 */
	void deleteByList(List<Game> games);
	
	/**
	 * 修改赛事
	 * @param game
	 * @return
	 */
	int updateByPrimaryKey(Game game);
	
	/**
	 * 查询总记录数
	 * @param page
	 * @return tatal
	 */
	long selectCount(Page page);
	
	/**
	 * 分页查询赛事列表
	 * @param page
	 * @return
	 */
	List<Game> selectByPage(Page page);
	
	/**
	 * 通过id查询场地
	 * @param id
	 * @return
	 */
    Game selectByPrimaryKey(Integer id);
}
