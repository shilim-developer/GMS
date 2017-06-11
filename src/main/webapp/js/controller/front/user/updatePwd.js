controllers.controller("updatePwd", ['$scope','$http','$window','$state','$stateParams','$timeout',
	function($scope,$http,$window,$state,$stateParams,$timeout) {
	$scope.user = new UserVo();
	
	//获取用户信息
	$scope.getUser = function() {
		var userVo = new UserVo();
		userVo.id = $stateParams.id;
		var url = baseUrl + "userManage/selectOneUser";
		var data = {user:userVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var pUser = data.resultParam; 
			$scope.user.id = pUser.id;
			$scope.user.account = pUser.account;
			$scope.user.password = pUser.password;
			$scope.user.name = pUser.name;
			$scope.user.cardNo = pUser.cardNo;
			$scope.user.email = pUser.email;
			$scope.user.mobilephone = pUser.mobilePhone;
			$scope.user.address = pUser.address;
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
			$window.location.href = "index.html";
		},300);
	}
	
	
	$scope.valid = false;
	$scope.submit = function() {
		var url = baseUrl + "userManage/isExistPwd";
		var data = {user:$scope.user.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.resultParam > 0){
				$scope.existPwd = true;
			}else{
				$scope.valid = true;
				if($scope.passwordForm.$invalid) return;
				var url = baseUrl + "userManage/updatePwd";
				var data = {user:$scope.user.voToJson()};
				$http.post(url,data)
				.success(function(data) {
					toastr.success('修改密码', '成功');
					$scope.goBack();
				});
			}
		})

	}
}]);