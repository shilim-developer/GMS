var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/");
	$stateProvider
	.state("welcome",{
		url:"/",
		templateUrl:"welcome/index.html"
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
   .state("userList",{
		url:"/userList",
		templateUrl:"User/user-list.html",
		controller:"userList"
	})
   .state("addUser",{
	    url:"/addUser",
		templateUrl:"User/user-add.html",
		controller:"addUser"
	})
   .state("editUser",{
		url:"/editUser/:id",
	    templateUrl:"User/user-edit.html",
		controller:"editUser"
    })
	.state("roleList",{
		url:"/roleList",
		templateUrl:"role/role-list.html",
		controller:"roleList"
	});
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
