controllers.controller("addPost", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.post = new PostVo();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("postList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.postForm.$invalid) return;
		var url = baseUrl + "postManage/addPost";
		var data = {post:$scope.post.voToJson()};
		$http.post(url,data)
		.success(function(data) {
				toastr.success('新增公告', '成功');
				$scope.goBack();
		});
	}
}]);