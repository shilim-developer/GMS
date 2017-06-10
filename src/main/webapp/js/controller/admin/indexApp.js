var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/");
	$stateProvider
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
	.state("welcome",{
		url:"/",
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
    .state("addRole",{
		url:"/addRole",
	    templateUrl:"role/role-add.html",
		controller:"addRole"
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
