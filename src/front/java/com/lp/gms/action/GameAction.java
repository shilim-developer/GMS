package com.lp.gms.action;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.google.gson.reflect.TypeToken;
import com.lp.gms.model.Game;
import com.lp.gms.model.Page;
import com.lp.gms.model.ResultMessage;
import com.lp.gms.service.GameService;
import com.lp.gms.utils.JsonUtil;
import com.opensymphony.xwork2.ActionSupport;

@Controller
@Scope(value = "prototype")
public class GameAction extends ActionSupport{
	@Autowired
	GameService gameService;

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
	 * 赛事信息
	 */
	private String game;
	public void setGame(String game) {
		this.game = game;
	}
	
	/**
	 * 赛事列表
	 */
	private String gameList;
	public void setGameList(String gameList) {
		this.gameList = gameList;
	}
	
	/**
	 * 分页信息
	 */
	private String page;
	public void setPage(String page) {
		this.page = page;
	}
	
	public void addGame() throws Exception {
		resultMessage = gameService.addGame(JsonUtil.jsonToObject(game, Game.class));
	}
	
	@SuppressWarnings("unchecked")
	public void deleteGame() throws Exception {
		resultMessage = gameService.deleteGame((List<Game>)JsonUtil.jsonToObject(gameList, new TypeToken<List<Game>>(){}.getType()));
	}
	
	public void updateGame() throws Exception {
		resultMessage = gameService.updateGame(JsonUtil.jsonToObject(game, Game.class));
	}
	
	public void selectGameList() throws Exception {
		resultMessage = gameService.selectGameList(JsonUtil.jsonToObject(page,Page.class));
	}
	
	public void selectOneGame() throws Exception {
		resultMessage = gameService.selectOneGame(JsonUtil.jsonToObject(game,Game.class));
	}
}
