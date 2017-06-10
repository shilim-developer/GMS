package com.lp.gms.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.lp.gms.model.Page;
import com.lp.gms.model.Place;

public class PlaceServiceTest {
	static PlaceService placeService;
	
	@BeforeClass
    public static void before(){
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		placeService = ctx.getBean(PlaceService.class);
	}

	@Test
	public void testAddPlace() {
		Place place = new Place();
		place.setPlaceLocation("东");
		place.setPlaceType("篮球场");
		place.setPlaceName("一号场");
		place.setCost(111);
		try {
			placeService.addPlace(place);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void testDeletePlace() {
		Place place1 = new Place();
		place1.setId(2);
		Place place2 = new Place();
		place2.setId(3);
		List<Place> list = new ArrayList<>();
		list.add(place1);
		list.add(place2);
		try {
			placeService.deletePlace(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testUpdatePlace() throws Exception {
		Place place = new Place();
		place.setId(4);
		place.setPlaceName("二号场");
		place.setPlaceLocation("西方");
		place.setPlaceType("篮球场");
		place.setCost(111);
		placeService.updatePlace(place);
	}
	
	@Test
	public void testSelectPlace() throws Exception {
		System.out.println(placeService.selectPlaceList(new Page(1, 2, null, null, null)));
	}

}
