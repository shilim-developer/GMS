var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/userList");
	$stateProvider
	.state("userList",{
		url:"/userList",
		templateUrl:"views/user/user-list.html",
		controller:"userList"
	})
	.state("addUser",{
		url:"/addUser",
		templateUrl:"views/user/user-add.html",
		controller:"addUser"
	})
	.state("editUser",{
		url:"/editUser/:id",
		templateUrl:"views/user/user-edit.html",
		controller:"editUser"
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
