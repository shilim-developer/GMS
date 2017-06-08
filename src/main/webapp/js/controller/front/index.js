/**
 * 菜单控制器
 */
var controllers = angular.module("controllers", []);

/**
 * 主页控制器
 */
controllers.controller("index",['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.sysUser = new UserVo();
	$rootScope.sysUser.id = 1;
	$rootScope.sysUser.account = sessionStorage.userName;
}]);