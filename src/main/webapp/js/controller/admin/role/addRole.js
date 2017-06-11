controllers.controller("addRole", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {

	$scope.role = new RoleVo();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("roleList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.roleForm.$invalid) return;
		var url = baseUrl + "roleManage/addRole";
		var data = {role:$scope.role.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('新增角色', '成功');
			$scope.goBack();
		});
	}
	
}]);