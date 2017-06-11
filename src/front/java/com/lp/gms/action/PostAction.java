package com.lp.gms.action;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Game;
import com.lp.gms.model.Page;
import com.lp.gms.model.Post;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.GameService;
import com.lp.gms.service.PostService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class PostAction extends ActionSupport{
	@Autowired
	private PostService postService;

	/**
	 * 序列化版本UID
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 结果信息
	 */
	@SuppressWarnings("unused")
	private ResultMessage resultMessage;
	
	/**
	 * 公告信息
	 */
	private String post;
	public void setPost(String post) {
		this.post = post;
	}
	
	/**
	 * 公告列表
	 */
	private String postList;
	public void setPostList(String postList) {
		this.postList = postList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void addPost() throws Exception {
		resultMessage = postService.addPost(JsonUtil.jsonToObject(post, Post.class));
	}
	
	@SuppressWarnings("unchecked")
	public void deletePost() throws Exception {
		resultMessage = postService.deletePost((List<Post>)JsonUtil.jsonToObject(postList, new TypeToken<List<Post>>(){}.getType()));
	}
	
	public void updatePost() throws Exception {
		resultMessage = postService.updatePost(JsonUtil.jsonToObject(post, Post.class));
	}
	
	public void selectPostList() throws Exception {
		resultMessage = postService.selectPostList(JsonUtil.jsonToObject(page,Page.class));
	}
	
	public void selectOnePost() throws Exception {
		resultMessage = postService.selectOnePost(JsonUtil.jsonToObject(post,Post.class));
	}
}
