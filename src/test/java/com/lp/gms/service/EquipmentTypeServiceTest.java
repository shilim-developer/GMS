package com.lp.gms.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.EquipmentType;
import com.lp.gms.model.Place;

public class EquipmentTypeServiceTest {
static EquipmentTypeService equipmentTypeService;
	
	@BeforeClass
    public static void before(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		equipmentTypeService = ctx.getBean(EquipmentTypeService.class);
	}


	@Test
	public void testAddEquipmentType() throws Exception {
		EquipmentType equipmentType = new EquipmentType();
		equipmentType.setTypename("冰雪器材");
		equipmentTypeService.addEquipmentType(equipmentType);
		
		}

	
	@Test
	public void testDeleteEquipmentType() {
		EquipmentType equipmentType1 = new EquipmentType();
		equipmentType1.setTypeid(4);
         List<EquipmentType> list = new ArrayList<>();
		list.add(equipmentType1);
		try {
			equipmentTypeService.deleteEquipmentType(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testUpdateEquipmentType() throws Exception {
		EquipmentType equipmentType = new EquipmentType();
	    equipmentType.setTypeid(3);
	    equipmentType.setTypename("球类");
	    equipmentTypeService.updateEquipmentType(equipmentType);
	}
	
	
	
	
}

