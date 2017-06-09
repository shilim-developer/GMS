controllers.controller("roleList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.roleList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取角色列表
	$scope.getRoleList = function() {
		//是否存在缓存页数
		if(sessionStorage.roleListPageNum) $scope.page.pageNum = sessionStorage.roleListPageNum;
		var url = baseUrl + "roleManage/selectRoleList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.roleList = data.resultParam;
				$scope.page.pageNum = $scope.roleList.pageNum;
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getRoleList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.roleListPageNum = pageNum;
		$scope.getRoleList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.roleList.pages)
		if(pageNum > $scope.roleList.pages) return;
		sessionStorage.roleListPageNum = pageNum;
		$scope.getRoleList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.roleList.pages) {
			$scope.page.pageNum = $scope.roleList.pageNum;
			return;
		}
		sessionStorage.roleListPageNum = $scope.page.pageNum;
		$scope.getRoleList();
	}
	

	//角色查询
	$scope.searchRole = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.roleListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getRoleList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.roleList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.roleList.list.length;i++) {
				$scope.roleList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.roleList.list.length;i++) {
				$scope.roleList.list[i].checked = false;
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

	//角色删除
	$scope.deleteRole= function() {
		var roleList = [];
		if($scope.deleteType == "one") {
			var roleVo = new RoleVo();
			roleVo.id = $scope.deleteId;
			roleList.push(roleVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.roleList.list.length;i++) {
				if($scope.roleList.list[i].checked) {
					var roleVo = new RoleVo();
					roleVo.id = $scope.roleList.list[i].id;
					roleList.push(roleVo);	
				}
			}
		}
		var url = baseUrl + "roleManage/deleteRole";
		var data = {roleList:JSON.stringify(roleList)};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('删除角色', '成功');
			$scope.getRoleList();
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editRole",{id:id});
	}

}]);