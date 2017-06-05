controllers.controller("addPost", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.game = new GameVo();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("gameList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.gameForm.$invalid) return;
		var url = baseUrl + "gameManage/addPost";
		var data = {game:$scope.game.voToJson()};
		$http.post(url,data)
		.success(function(data) {
				toastr.success('新增公告', '成功');
				$scope.goBack();
		});
	}
}]);