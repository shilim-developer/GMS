controllers.controller("equipmentloanList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.equipmentloanList = [];
	$scope.checkType = ["审核通过","审核不通过"];
	$scope.equipmentloan = new EquipmentloanVo();
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取器材列表
	$scope.getEquipmentloanList = function() {
		//是否存在缓存页数
		if(sessionStorage.equipmentloanListPageNum) $scope.page.pageNum = sessionStorage.equipmentloanListPageNum;
		var url = baseUrl + "equipmentloanFront/selectEquipmentloanList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.equipmentloanList = data.resultParam;
				$scope.page.pageNum = $scope.equipmentloanList.pageNum;
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getEquipmentloanList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.equipmentloanListPageNum = pageNum;
		$scope.getEquipmentloanList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.equipmentloanList.pages)
		if(pageNum > $scope.equipmentloanList.pages) return;
		sessionStorage.equipmentloanListPageNum = pageNum;
		$scope.getEquipmentloanList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.equipmentloanList.pages) {
			$scope.page.pageNum = $scope.equipmentloanList.pageNum;
			return;
		}
		sessionStorage.equipmentloanListPageNum = $scope.page.pageNum;
		$scope.getEquipmentloanList();
	}
	
	//器材查询
	$scope.searchEquipmentloan = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.equipmentloanListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getEquipmentloanList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.equipmentloanList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.equipmentloanList.list.length;i++) {
				$scope.equipmentloanList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.equipmentloanList.list.length;i++) {
				$scope.equipmentloanList.list[i].checked = false;
			}
		}
	});

	//租借审核
	$scope.openCheckModal = function(item) {
		$scope.equipmentloan.equipmentloanid = item.equipmentloanid;
		$scope.equipmentloan.startdate = item.startdate;
		$scope.equipmentloan.enddate= item.enddate;
		$("#checkTips").modal("show");
	}
	
	//审核
	$scope.check = function() {
		var url = baseUrl + "equipmentloanManage/checkEquipmentloan";
		var data = {equipmentloan:$scope.equipmentloan.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				toastr.success('审核', '成功');
				$scope.getEquipmentloanList();
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
		console.log($scope.equipmentloan)
	}

	
	
	//跳转修改页
	$scope.toLeasePage = function(equipmentloanid) {
		$state.go("leaseEquipment",{equipmentloanid:equipmentloanid});
	}

}]);