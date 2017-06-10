package com.lp.gms.service;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.Role;

public class RoleServiceTest {
    static RoleService roleService;
	@BeforeClass
	public static void before() {
	ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
	roleService = ctx.getBean(RoleService.class);
	}

	@Test
	public void testAddRole() throws Exception {
		Role role = new Role();
		role.setDescription("系统管理员");
		role.setStatus((byte) 1);
		role.setType("超管");
		roleService.insert(role);
	}
	
	
}
