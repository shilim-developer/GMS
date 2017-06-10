var loginApp = angular.module("loginApp",[]);
var baseUrl = "/GMS/";
loginApp
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

loginApp.controller("login", ['$scope','$http','$window',function($scope,$http,$window) {
	$scope.user = new UserVo();
	
	$scope.login = function() {
		var url = baseUrl + "userFront/login";
		var data = {user:$scope.user.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				sessionStorage.userName = data.resultParam.account;
				$window.location.href = "index.html";
			} else {
				console.log(data.userToken);
			}
		})
		.error(function(data) {
			console.log(data.userToken);
		});
	}
	
}]);