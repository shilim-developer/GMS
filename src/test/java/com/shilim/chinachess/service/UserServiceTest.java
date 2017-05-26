package com.shilim.chinachess.service;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.action.HelloAction;
import com.lp.gms.model.User;
import com.lp.gms.utils.CtxUtil;

public class UserServiceTest {
	static HelloAction helloAction;
	
	@BeforeClass
    public static void before(){
//		userService = CtxUtil.getBean(UserService.class);
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        helloAction = ctx.getBean(HelloAction.class);
        
	}

	@Test
	public void testRegist() {
		helloAction.test();
//		userService.regist(new User(null, "shilim", "shilim", null));
	}

	@Test
	public void testLogin() {
	}

}
