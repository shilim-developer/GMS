controllers.controller("equipmentList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.equipmentList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取器材列表
	$scope.getEquipmentList = function() {
		//是否存在缓存页数
		if(sessionStorage.equipmentListPageNum) $scope.page.pageNum = sessionStorage.equipmentListPageNum;
		var url = baseUrl + "equipmentManage/selectEquipmentList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.equipmentList = data.resultParam;
				$scope.page.pageNum = $scope.equipmentList.pageNum;
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getEquipmentList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.equipmentListPageNum = pageNum;
		$scope.getEquipmentList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.equipmentList.pages)
		if(pageNum > $scope.equipmentList.pages) return;
		sessionStorage.equipmentListPageNum = pageNum;
		$scope.getEquipmentList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.equipmentList.pages) {
			$scope.page.pageNum = $scope.equipmentList.pageNum;
			return;
		}
		sessionStorage.equipmentListPageNum = $scope.page.pageNum;
		$scope.getEquipmentList();
	}

	//器材查询
	$scope.searchEquipment = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.equipmentListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getEquipmentList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.equipmentList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.equipmentList.list.length;i++) {
				$scope.equipmentList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.equipmentList.list.length;i++) {
				$scope.equipmentList.list[i].checked = false;
			}
		}
	});

	//删除确认提示
	$scope.deleteType = "";
	$scope.deleteEquipmentid = ""
	$scope.deleteTips = function(type,equipmentid) {
		$scope.deleteType = type;
		if(equipmentid){
			$scope.deleteEquipmentid = equipmentid;
		}
		$("#deleteTips").modal("show");
	}

	//器材删除
	$scope.deleteEquipment= function() {
		var equipmentList = [];
		if($scope.deleteType == "one") {
			var equipmentVo = new EquipmentVo();
			equipmentVo.equipmentid = $scope.deleteEquipmentid;
			equipmentList.push(equipmentVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.equipmentList.list.length;i++) {
				if($scope.equipmentList.list[i].checked) {
					var equipmentVo = new EquipmentVo();
					equipmentVo.equipmentid = $scope.equipmentList.list[i].equipmentid;
					equipmentList.push(equipmentVo);	
				}
			}
		}
		var url = baseUrl + "equipmentManage/deleteEquipment";
		var data = {equipmentList:JSON.stringify(equipmentList)};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('删除器材', '成功');
				$scope.getEquipmentList();
			} else {
				toastr.error('删除器材', '失败');
			}
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(equipmentid) {
		$state.go("editEquipment",{equipmentid:equipmentid});
	}

}]);