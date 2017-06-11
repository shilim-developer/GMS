controllers.controller("editUser", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.user = new UserVo();
	$scope.user.role = new RoleVo();
	
	//获取用户信息
	$scope.getUser = function() {
		var userVo = new UserVo();
		userVo.id = $stateParams.id;
		var url = baseUrl + "userManage/selectOneUser";
		var data = {user:userVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rUser = data.resultParam; 
			$scope.user.id = rUser.id;
			$scope.user.account = rUser.account;
			$scope.user.password = rUser.password;
			$scope.user.name = rUser.name;
			$scope.user.cardNo = rUser.cardNo;
			$scope.user.email = rUser.email;
			$scope.user.mobilephone = rUser.mobilePhone;
			$scope.user.address = rUser.address;
			$scope.user.role.description = rUser.role.description;
			$scope.user.role.id = rUser.role.id;
		});
	}
	$scope.getUser();
	
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
	
	$scope.getAllRole = function() {
		var url = baseUrl + "roleManage/selectAllRole";
		$http.post(url)
		.success(function(data) {
			if(data.serviceResult == 1){
				$scope.roleList = data.resultParam;
				$scope.user.role.id = $scope.roleList[$scope.role.id - 1].id;
			}
		});
	}
	
	$scope.getAllRole();
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.userForm.$invalid) return;
		var url = baseUrl + "userManage/updateUser";
		var data = {user:$scope.user.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改用户', '成功');
			$scope.goBack();
		});
	}
}]);