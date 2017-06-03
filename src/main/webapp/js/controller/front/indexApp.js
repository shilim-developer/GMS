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
