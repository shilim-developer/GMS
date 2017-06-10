controllers.controller("addUser", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {

	$scope.user = new UserVo();
	$scope.user.role = new RoleVo();
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("userList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.userForm.$invalid) return;
		var url = baseUrl + "userManage/addUser";
		var data = {user:$scope.user.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('新增用户', '成功');
			$scope.goBack();
		});
	}
	
	$scope.getAllRole = function() {
		var url = baseUrl + "roleManage/selectAllRole";
		$http.post(url)
		.success(function(data) {
			if(data.serviceResult == 1){
				$scope.roleList = data.resultParam;
				$scope.user.role.id = $scope.roleList[0].id;
			}
		});
	}
	
	$scope.getAllRole();
	
}]);