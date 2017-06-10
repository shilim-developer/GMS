var registApp = angular.module("registApp",[]);
var baseUrl = "/GMS/";
registApp
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

registApp.controller("regist", ['$scope','$http','$window',function($scope,$http,$window) {
	$scope.user = new UserVo();
	$scope.existName = false;
	
	$scope.RegistForm = function() {
		var rUrl = baseUrl + "userManage/isExistName"
		var data = {user:$scope.user.voToJson()};
		$http.post(rUrl,data)
		.success(function(data) {
			console.log(data);
			if(data.resultParam > 0){
				$scope.existName = true;
			}else{
				$scope.existName = false;
				var url = baseUrl + "userManage/addUser"
				var data = {user:$scope.user.voToJson()};
				$http.post(url,data)
				.success(function(data) {
					toastr.success('注册', '成功');
					//跳转到登录页
					$window.location.href = "login.html";
				})
			}
		})
	}
	
}])