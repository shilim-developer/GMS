package com.lp.gms.service;

import static org.junit.Assert.*;

import org.junit.BeforeClass;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.Equipment;

public class EquipmentServiceTest {
static EquipmentService equipmentService;
	
	@BeforeClass
    public static void before(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		equipmentService = ctx.getBean(EquipmentService.class);
	}


	@Test
	public void testAddEquipment() throws Exception {
		Equipment equipment = new Equipment();
		equipment.setEquipmentname("篮球");
		equipment.setTypeid(4);
		equipment.setEstandard("正常");
		equipment.setEprice("10元");
		equipment.setTotalnum(50);
	    equipment.setUnderrepair(false);
		equipmentService.addEquipment(equipment);
		}

	
	@Test
	public void testDeleteEquipment() {
		Equipment equipment = new Equipment();
		equipment.setEquipmentid(1);
         List<Equipment> list = new ArrayList<>();
		list.add(equipment);
		try {
			equipmentService.deleteEquipment(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testUpdateEquipment() throws Exception {
		Equipment equipment = new Equipment();
		equipment.setEquipmentid(1);
	    equipment.setEquipmentname("杠铃");
	    equipment.setTypeid(3);
	    equipment.setEstandard("重10公斤");
	    equipment.setEprice("15元");
	    equipment.setTotalnum(30);
	    equipment.setUnderrepair(false);
	    equipmentService.updateEquipment(equipment);
	}
	
	
	
	
}

