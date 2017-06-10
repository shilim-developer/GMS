package com.lp.gms.service;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lp.gms.constant.ResultCode;
import com.lp.gms.dao.GameDao;
import com.lp.gms.model.Game;
import com.lp.gms.model.Page;
import com.lp.gms.model.PageInfo;
import com.lp.gms.model.ResultMessage;

@Service
@Transactional(rollbackFor = Exception.class)
public class GameService {
	@Autowired
	private GameDao gameDao;
	
	public ResultMessage addGame(Game game) throws Exception {
		gameDao.insert(game);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}
	
	public ResultMessage deleteGame(List<Game> list) throws Exception {
		gameDao.deleteByList(list);
		return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",null);
	}
	
	public ResultMessage updateGame(Game game) throws Exception {
		gameDao.updateByPrimaryKey(game);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	public ResultMessage selectGameList(Page page) throws Exception {
		page.coutStartColum();
		long total = gameDao.selectCount(page);
		List<Game> games = gameDao.selectByPage(page);
		PageInfo<Game> pageInfo = new PageInfo<Game>(page, total, games);
		return new ResultMessage(true,ResultCode.SUCCESS,"分页成功",pageInfo);
	}
	
	public ResultMessage selectOneGame(Game game) throws Exception {
		Game rGame = gameDao.selectByPrimaryKey(game.getId());
		System.out.println(rGame.getGamename());
		return new ResultMessage(true,ResultCode.SUCCESS,"查询赛事成功",rGame);
		
	}
	
}
