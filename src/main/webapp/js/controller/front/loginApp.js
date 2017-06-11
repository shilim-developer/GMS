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
		var url = baseUrl + "userManage/login";
		var data = {user:$scope.user.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				console.log(data.userToken);
				sessionStorage.setItem("userId", data.resultParam.id);
				sessionStorage.setItem("userName", data.resultParam.account);
//				sessionStorage.userId = data.resultParam.id;
				//跳转到首页
				$window.location.href = "index.html";
			} else {
				toastr.error('失败', data.resultInfo);
			}
		})
		.error(function(data) {
			toastr.error('登陆', "网络繁忙");
		});
	}
	
}]);