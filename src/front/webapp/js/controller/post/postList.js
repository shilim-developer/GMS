controllers.controller("postList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.postList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取公告列表
	$scope.getPostList = function() {
		//是否存在缓存页数
		if(sessionStorage.postListPageNum) $scope.page.pageNum = sessionStorage.postListPageNum;
		var url = baseUrl + "postManage/selectPostList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			$scope.postList = data.resultParam;
			$scope.page.pageNum = $scope.postList.pageNum;
		});
	}
	$scope.getPostList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.postListPageNum = pageNum;
		$scope.getPostList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.postList.pages)
		if(pageNum > $scope.postList.pages) return;
		sessionStorage.postListPageNum = pageNum;
		$scope.getPostList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.pageNum > $scope.postList.pages ||
				typeof $scope.page.pageNum != "number") {
			sessionStorage.postListPageNum = pageNum;
			return;
		}
		$scope.getPostList();
	}

	//公告查询
	$scope.searchPost = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.postListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getPostList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.postList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.postList.list.length;i++) {
				$scope.postList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.postList.list.length;i++) {
				$scope.postList.list[i].checked = false;
			}
		}
	});

	//删除确认提示
	$scope.deleteType = "";
	$scope.deleteId = ""
	$scope.deleteTips = function(type,id) {
		$scope.deleteType = type;
		if(id){
			$scope.deleteId = id;
		}
		$("#deleteTips").modal("show");
	}

	//公告删除
	$scope.deletePost= function() {
		var postList = [];
		if($scope.deleteType == "one") {
			var postVo = new PostVo();
			postVo.id = $scope.deleteId;
			postList.push(postVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.postList.list.length;i++) {
				if($scope.postList.list[i].checked) {
					var postVo = new PostVo();
					postVo.id = $scope.postList.list[i].id;
					postList.push(postVo);	
				}
			}
		}
		var url = baseUrl + "postManage/deletePost";
		var data = {postList:JSON.stringify(postList)};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('删除公告', '成功');
			$scope.getPostList();
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editPost",{id:id});
	}

}]);