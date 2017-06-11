/**
 * 菜单控制器
 */
var controllers = angular.module("controllers", []);

/**
 * 主页控制器
 */
controllers.controller("index",['$scope','$http','$stateParams','loginCheckService',function($scope,$http,$stateParams,loginCheckService) {
	$scope.user = new UserVo();
	
	$scope.roleControl = function() {
		var userVo = new UserVo();
		userVo.id = sessionStorage.getItem("userId");
		var url = baseUrl + "userManage/selectOneUser";
//		$scope.user.id = sessionStorage.getItem("userId");
		var data = {user:userVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1){
				console.log(data);
                $scope.user = data.resultParam;
			} else {
				loginCheckService.loginCheck(data.serviceResult);
			}
		});
	}
	
	$scope.roleControl();
	
}]);