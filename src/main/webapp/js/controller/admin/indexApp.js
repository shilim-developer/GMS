var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/welcome");
	$stateProvider
	.state("welcome",{
		url:"/welcome",
		templateUrl:"welcome/index.html"
	})
	.state("userList",{
		url:"/userList",
		templateUrl:"user/user-list.html",
		controller:"userList"
	})
	.state("addUser",{
		url:"/addUser",
		templateUrl:"user/user-add.html",
		controller:"addUser"
	})
	.state("editUser",{
		url:"/editUser/:id",
		templateUrl:"user/user-edit.html",
		controller:"editUser"
	})
	.state("roleList",{
		url:"/roleList",
		templateUrl:"role/role-list.html",
		controller:"roleList"
	})
	.state("placeTypeList",{
		url:"/placeTypeList",
		templateUrl:"place-type/place-type-list.html",
		controller:"placeTypeList"
	})
	.state("addPlaceType",{
		url:"/addPlaceType",
		templateUrl:"place-type/place-type-add.html",
		controller:"addPlaceType"
	})
	.state("editPlaceType",{
		url:"/editPlaceType/:id",
		templateUrl:"place-type/place-type-edit.html",
		controller:"editPlaceType"
	})
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
	.state("placeLeaseRecordList",{
		url:"/placeLeaseRecordList",
		templateUrl:"place-lease-record/place-lease-record-list.html",
		controller:"placeLeaseRecordList"
	})
  ;
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
