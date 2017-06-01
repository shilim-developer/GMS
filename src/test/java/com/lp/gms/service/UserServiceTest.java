package com.lp.gms.service;
import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.Page;
import com.lp.gms.model.User;

public class UserServiceTest {
    static UserService userService;
	@BeforeClass
	public static void before() {
	ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
	userService = ctx.getBean(UserService.class);
	}

	@Test
	public void testDeleteUser() throws Exception {
		User user1 = new User();
		user1.setId((long) 2);
		User user2 = new User();
		user2.setId((long) 3);
		List<User> list = new ArrayList<>();
		list.add(user1);
		list.add(user2);
		userService.deletByList(list);
	}
	
	@Test
	public void testUpdateUser() throws Exception {
		User user = new User();
		user.setId((long) 4);
		user.setAddress("海大路1号");
		user.setAccount("huyloveyou");
		user.setCardno("201411701230");
		user.setName("辉辉");
		user.setEmail("269506000@qq.com");
		user.setPassword("12344321");
		user.setMobilephone("13432843285");
		user.setStatus((byte) 1);
		userService.updateUser(user);
	}
	
	@Test
	public void testSelectUser() throws Exception {
		System.out.println(userService.selectUserList(new Page(1, 2, null, null, null)));
	}
	
	@Test
	public void testLogin() throws Exception {
		userService.login("201411701230", "12344321");
	}
	
}
