var indexApp = angular.module("indexApp",['ui.router','controllers']);
var baseUrl = "/GMS/";
indexApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/placeList");
	$stateProvider
	.state("placeList",{
		url:"/placeList",
		templateUrl:"views/place/place-list.html",
		controller:"placeList"
	})
	.state("addPlace",{
		url:"/addPlace",
		templateUrl:"views/place/place-add.html",
		controller:"addPlace"
	})
	.state("editPlace",{
		url:"/editPlace/:id",
		templateUrl:"views/place/place-edit.html",
		controller:"editPlace"
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
