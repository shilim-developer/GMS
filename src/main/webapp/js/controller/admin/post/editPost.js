controllers.controller("editPost", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.post = new PostVo();
	
	//获取赛事信息
	$scope.getPost = function() {
		var postVo = new PostVo();
		postVo.id = $stateParams.id;
		var url = baseUrl + "postManage/selectOnePost";
		var data = {post:postVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rPost = data.resultParam; 
			$scope.post.id = rPost.id;
			$scope.post.name = rPost.name;
			$scope.post.context = rPost.context;
			$scope.post.time = new Date(rPost.time);
			
		});
	}
	$scope.getPost();
	
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
		var url = baseUrl + "postManage/updatePost";
		var data = {post:$scope.post.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改公告', '成功');
			$scope.goBack();
		});
	}
}]);