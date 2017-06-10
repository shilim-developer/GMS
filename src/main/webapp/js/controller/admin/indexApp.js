var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/placeList");
	$stateProvider
	.state("placeList",{
		url:"/placeList",
		templateUrl:"place/place-list.html",
		controller:"placeList"
	})
	.state("addPlace",{
		url:"/addPlace",
		templateUrl:"place/place-add.html",
		controller:"addPlace"
	})
	.state("editPlace",{
		url:"/editPlace/:id",
		templateUrl:"place/place-edit.html",
		controller:"editPlace"
	})
	
	.state("equipmentList",{
		url:"/equipmentList",
		templateUrl:"equipment/equipment-list.html",
		controller:"equipmentList"
	})
	
	.state("addEquipment",{
		url:"/addEquipment",
		templateUrl:"equipment/equipment-add.html",
		controller:"addEquipment"
	})
	
	.state("editEquipment",{
		url:"/editEquipment/:equipmentid",
		templateUrl:"equipment/equipment-edit.html",
		controller:"editEquipment"
	})
	
	.state("equipmentTypeList",{
		url:"/equipmentTypeList",
		templateUrl:"equipmentType/equipmentType-list.html",
		controller:"equipmentTypeList"
	})
	
	.state("addEquipmentType",{
		url:"/addEquipmentType",
		templateUrl:"equipmentType/equipmentType-add.html",
		controller:"addEquipmentType"
	})
	
	.state("editEquipmentType",{
		url:"/editEquipmentType/:typeid",
		templateUrl:"equipmentType/equipmentType-edit.html",
		controller:"editEquipmentType"
	})
	
	.state("equipmentloanList",{
		url:"/equipmentloanList",
		templateUrl:"equipmentloan/equipmentloan-list.html",
		controller:"equipmentloanList"
	})
}])
.config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.transformRequest=function(obj){
		var str=[];
		for(var p in obj){
			str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
		}
		return str.join("&");
	};
	$httpProvider.defaults.headers.post = {
			'Content-Type': 'application/x-www-form-urlencoded',
	}
}]);
