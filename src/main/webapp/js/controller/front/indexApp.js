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
	.state("leasePlace",{
		url:"/leasePlace/:id",
		templateUrl:"place/place-lease.html",
		controller:"leasePlace"
	})
<<<<<<< HEAD
	.state("placeLeaseRecordList",{
		url:"/placeLeaseRecordList",
		templateUrl:"place-lease-record/place-lease-record-list.html",
		controller:"placeLeaseRecordList"
	});
=======
	
	.state("equipmentList",{
		url:"/equipmentList",
		templateUrl:"equipment/equipment-list.html",
		controller:"equipmentList"
	})
	
	.state("leaseEquipment",{
		url:"/leaseEquipment/:equipmentid",
		templateUrl:"equipment/equipment-lease.html",
		controller:"leaseEquipment"
	})
	
	.state("equipmentloanList",{
		url:"/equipmentloanList",
		templateUrl:"equipmentloan/equipmentloan-list.html",
		controller:"equipmentloanList"
	})
>>>>>>> origin/jerry
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
