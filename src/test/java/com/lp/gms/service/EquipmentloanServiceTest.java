package com.lp.gms.service;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.Equipmentloan;

public class EquipmentloanServiceTest {
	static EquipmentloanService equipmentloanService;

	@BeforeClass
	public static void before(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		equipmentloanService = ctx.getBean(EquipmentloanService.class);
		}


	@Test
	public void testAddEquipmentloan() throws Exception {
		Equipmentloan equipmentloan = new Equipmentloan();
		equipmentloan.setEquipmentid(3);
		equipmentloan.setUserId(3);
		equipmentloan.setStartdate("2017-5-20 13:14");
		equipmentloan.setEnddate("2017-5-20 16:14");
		equipmentloan.setEpayment("15");
	    equipmentloan.setRentnum(1);
	    equipmentloan.setEstatus("未支付，等待审批");
		equipmentloanService.addEquipmentloan(equipmentloan);
		}

	

}
