package com.lp.gms.dao;

import java.util.List;
import com.lp.gms.model.Game;
import com.lp.gms.model.Page;
import com.lp.gms.model.Post;

/**
 * 公告Dao
 * @author qishao
 * 
 */

public interface PostDao {
	/**
	 * 添加公告
	 * @param post
	 * @return
	 */
	int insert(Post post);
	
	/**
	 * 删除公告
	 * @param list
	 */
	void deleteByList(List<Post> list);
	
	/**
	 * 修改公告
	 * @param post
	 * @return
	 */
	int updateByPrimaryKey(Post post);
	
	/**
	 * 查询总记录数
	 * @param page
	 * @return tatal
	 */
	long selectCount(Page page);
	
	/**
	 * 分页查询公告列表
	 * @param page
	 * @return
	 */
	List<Post> selectByPage(Page page);
	
	/**
	 * 通过id查询公告
	 * @param id
	 * @return
	 */
    Post selectByPrimaryKey(Integer id);
}
