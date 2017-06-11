package com.lp.gms.service;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.PostDao;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.Post;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class PostService {
	@Autowired
	private PostDao postDao;
	
	public ResultMessage addPost(Post post) throws Exception {
		postDao.insert(post);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage deletePost(List<Post> list) throws Exception {
		postDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage updatePost(Post post) throws Exception {
		postDao.updateByPrimaryKey(post);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	public ResultMessage selectPostList(Page page) throws Exception {
		page.coutStartColum();
		long total = postDao.selectCount(page);
		List<Post> posts = postDao.selectByPage(page);
		PageInfo<Post> pageInfo = new PageInfo<Post>(page, total, posts);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
	
	public ResultMessage selectOnePost(Post post) throws Exception {
		Post rPost = postDao.selectByPrimaryKey(post.getId());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询公告成功",rPost);
	}

	
}
