controllers.controller("placeLeaseRecordList", ['$scope','$http','$state','loginCheckService',function($scope,$http,$state,loginCheckService) {
	$scope.checkAll = false;//全选
	$scope.placeLeaseRecordList = [];
	$scope.placeStatusList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取场地列表
	$scope.getPlaceList = function() {
		//是否存在缓存页数
		if(sessionStorage.placeLeaseRecordListPageNum) $scope.page.pageNum = sessionStorage.placeLeaseRecordListPageNum;
		var url = baseUrl + "placeLeaseRecordFront/selectPlaceLeaseRecordList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.placeLeaseRecordList = data.resultParam;
				$scope.page.pageNum = $scope.placeLeaseRecordList.pageNum;
			} else {
				loginCheckService.loginCheck(data.serviceResult);
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getPlaceList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.placeLeaseRecordListPageNum = pageNum;
		$scope.getPlaceList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.placeLeaseRecordList.pages)
		if(pageNum > $scope.placeLeaseRecordList.pages) return;
		sessionStorage.placeLeaseRecordListPageNum = pageNum;
		$scope.getPlaceList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.placeLeaseRecordList.pages) {
			$scope.page.pageNum = $scope.placeLeaseRecordList.pageNum;
			return;
		}
		sessionStorage.placeLeaseRecordListPageNum = $scope.page.pageNum;
		$scope.getPlaceList();
	}
	
	//显示场地状态
	$scope.showStatus = function(id) {
		var placeStatusVo = new PlaceStatusVo();
		placeStatusVo.placeId = id;
		var url = baseUrl + "placeStatusManage/getPlaceStatusListByPlaceId";
		var data = {placeStatus:placeStatusVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.placeStatusList = data.resultParam;
				$("#statusTips").modal("show");
			} else {
				loginCheckService.loginCheck(data.serviceResult);
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}

	//场地查询
	$scope.searchPlace = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.placeLeaseRecordListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getPlaceList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.placeLeaseRecordList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.placeLeaseRecordList.list.length;i++) {
				$scope.placeLeaseRecordList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.placeLeaseRecordList.list.length;i++) {
				$scope.placeLeaseRecordList.list[i].checked = false;
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
	$scope.deletePlace= function() {
		var placeList = [];
		if($scope.deleteType == "one") {
			var placeVo = new PlaceVo();
			placeVo.id = $scope.deleteId;
			placeList.push(placeVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.placeLeaseRecordList.list.length;i++) {
				if($scope.placeLeaseRecordList.list[i].checked) {
					var placeVo = new PlaceVo();
					placeVo.id = $scope.placeLeaseRecordList.list[i].id;
					placeList.push(placeVo);	
				}
			}
		}
		var url = baseUrl + "placeManage/deletePlace";
		var data = {placeList:JSON.stringify(placeList)};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('删除场地', '成功');
				$scope.getPlaceList();
			} else {
				loginCheckService.loginCheck(data.serviceResult);
				toastr.error('删除场地', '失败');
			}
			
		})
		.error(function(data) {
			toastr.error('系统繁忙', '删除场地');
		});
	}
	
	//显示租借反馈窗口
	$scope.openResultModal = function(result) {
		$scope.result = result;
		$("#resultTips").modal("show");
	}

}]);