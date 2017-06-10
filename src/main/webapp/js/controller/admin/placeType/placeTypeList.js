controllers.controller("placeTypeList", ['$scope','$http','$state','loginCheckService',function($scope,$http,$state,loginCheckService) {
	$scope.checkAll = false;//全选
	$scope.placeTypeList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取场地列表
	$scope.getPlaceTypeList = function() {
		//是否存在缓存页数
		if(sessionStorage.placeTypeListPageNum) $scope.page.pageNum = sessionStorage.placeTypeListPageNum;
		var url = baseUrl + "/placeTypeManage/selectPlaceTypeList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.placeTypeList = data.resultParam;
				$scope.page.pageNum = $scope.placeTypeList.pageNum;
			} else {
				loginCheckService.loginCheck(data.serviceResult);
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getPlaceTypeList();
	
	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.placeTypeListPageNum = pageNum;
		$scope.getPlaceTypeList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.placeTypeList.pages)
		if(pageNum > $scope.placeTypeList.pages) return;
		sessionStorage.placeTypeListPageNum = pageNum;
		$scope.getPlaceTypeList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.placeTypeList.pages) {
			$scope.page.pageNum = $scope.placeTypeList.pageNum;
			return;
		}
		sessionStorage.placeTypeListPageNum = $scope.page.pageNum;
		$scope.getPlaceTypeList();
	}

	//场地查询
	$scope.searchPlaceType = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.placeTypeListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getPlaceTypeList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.placeTypeList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.placeTypeList.list.length;i++) {
				$scope.placeTypeList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.placeTypeList.list.length;i++) {
				$scope.placeTypeList.list[i].checked = false;
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

	//场地删除
	$scope.deletePlaceType= function() {
		var placeTypeList = [];
		if($scope.deleteType == "one") {
			var placeTypeVo = new PlaceTypeVo();
			placeTypeVo.id = $scope.deleteId;
			placeTypeList.push(placeTypeVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.placeTypeList.list.length;i++) {
				if($scope.placeTypeList.list[i].checked) {
					var placeTypeVo = new PlaceTypeVo();
					placeTypeVo.id = $scope.placeTypeList.list[i].id;
					placeTypeList.push(placeTypeVo);	
				}
			}
		}
		var url = baseUrl + "placeTypeManage/deletePlaceType";
		var data = {placeTypeList:JSON.stringify(placeTypeList)};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('删除场地类型', '成功');
				$scope.getPlaceTypeList();
			} else {
				loginCheckService.loginCheck(data.serviceResult);
				toastr.error(data.resultInfo, '失败');
			}
		})
		.error(function() {
			toastr.error("网络繁忙", '失败');
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editPlaceType",{id:id});
	}

}]);