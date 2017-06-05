controllers.controller("placeLeaseRecordList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.placeLeaseRecordList = [];
	$scope.checkType = ["审核通过","审核不通过"];
	$scope.placeLeaseRecord = new PlaceLeaseRecordVo();
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取场地列表
	$scope.getPlaceLeaseRecordList = function() {
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
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getPlaceLeaseRecordList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.placeLeaseRecordListPageNum = pageNum;
		$scope.getPlaceLeaseRecordList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.placeLeaseRecordList.pages)
		if(pageNum > $scope.placeLeaseRecordList.pages) return;
		sessionStorage.placeLeaseRecordListPageNum = pageNum;
		$scope.getPlaceLeaseRecordList();
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
		$scope.getPlaceLeaseRecordList();
	}
	
	//场地查询
	$scope.searchPlace = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.placeLeaseRecordListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getPlaceLeaseRecordList();
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

	//租借审核
	$scope.openCheckModal = function(item) {
		if(item.checkStatus != "待审核") return;
		$scope.placeLeaseRecord.id = item.id;
		$scope.placeLeaseRecord.startTime = item.startTime;
		$scope.placeLeaseRecord.endTime = item.endTime;
		$("#checkTips").modal("show");
	}
	
	//审核
	$scope.check = function() {
		var url = baseUrl + "placeLeaseRecordManage/checkPlaceLeaseRecord";
		var data = {placeLeaseRecord:$scope.placeLeaseRecord.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				toastr.success('审核', '成功');
				$scope.getPlaceLeaseRecordList();
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
		console.log($scope.placeLeaseRecord)
	}

	
	
	//跳转修改页
	$scope.toLeasePage = function(id) {
		$state.go("leasePlace",{id:id});
	}

}]);