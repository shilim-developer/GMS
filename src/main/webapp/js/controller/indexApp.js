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
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/gameList");
	$stateProvider
	.state("gameList",{
		url:"/gameList",
		templateUrl:"views/game/game-list.html",
		controller:"gameList"
	})
	.state("checkGame",{
		url:"/checkGame/:id",
		templateUrl:"views/game/game-check.html",
		controller:"checkGame"
	})
	.state("addGame",{
		url:"/addGame",
		templateUrl:"views/game/game-add.html",
		controller:"addGame"
	})
	.state("editGame",{
		url:"/editGame/:id",
		templateUrl:"views/game/game-edit.html",
		controller:"editGame"
	});
}])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/postList");
	$stateProvider
	.state("postList",{
		url:"/postList",
		templateUrl:"views/post/post-list.html",
		controller:"postList"
	})
	.state("addPost",{
		url:"/addPost",
		templateUrl:"views/post/post-add.html",
		controller:"addPost"
	})
	.state("editPost",{
		url:"/editPost/:id",
		templateUrl:"views/post/post-edit.html",
		controller:"editPost"
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
