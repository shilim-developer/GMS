controllers.controller("equipmentTypeList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.equipmentTypeList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取器材类型列表
	$scope.getEquipmentTypeList = function() {
		//是否存在缓存页数
		if(sessionStorage.equipmentTypeListPageNum) $scope.page.pageNum = sessionStorage.equipmentTypeListPageNum;
		var url = baseUrl + "equipmentTypeManage/selectEquipmentTypeList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.equipmentTypeList = data.resultParam;
				$scope.page.pageNum = $scope.equipmentTypeList.pageNum;
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getEquipmentTypeList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.equipmentTypeListPageNum = pageNum;
		$scope.getEquipmentTypeList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.equipmentTypeList.pages)
		if(pageNum > $scope.equipmentTypeList.pages) return;
		sessionStorage.equipmentTypeListPageNum = pageNum;
		$scope.getEquipmentTypeList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.page.pageNum > $scope.equipmentTypeList.pages) {
			$scope.page.pageNum = $scope.equipmentTypeList.pageNum;
			return;
		}
		sessionStorage.equipmentTypeListPageNum = $scope.page.pageNum;
		$scope.getEquipmentTypeList();
	}

	//器材类型查询
	$scope.searchEquipmentType = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.equipmentTypeListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getEquipmentTypeList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.equipmentTypeList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.equipmentTypeList.list.length;i++) {
				$scope.equipmentTypeList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.equipmentTypeList.list.length;i++) {
				$scope.equipmentTypeList.list[i].checked = false;
			}
		}
	});

	//删除确认提示
	$scope.deleteType = "";
	$scope.deleteTypeid = ""
	$scope.deleteTips = function(type,typeid) {
		$scope.deleteType = type;
		if(typeid){
			$scope.deleteTypeid = typeid;
		}
		$("#deleteTips").modal("show");
	}

	//器材类型删除
	$scope.deleteEquipmentType= function() {
		var equipmentTypeList = [];
		if($scope.deleteType == "one") {
			var equipmentTypeVo = new EquipmentTypeVo();
			equipmentTypeVo.typeid = $scope.deleteTypeid;
			equipmentTypeList.push(equipmentTypeVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.equipmentTypeList.list.length;i++) {
				if($scope.equipmentTypeList.list[i].checked) {
					var equipmentTypeVo = new EquipmeyntTypeVo();
					equipmentTypeVo.typeid = $scope.equipmentTypeList.list[i].typeid;
					equipmentTypeList.push(equipmentTypeVo);	
				}
			}
		}
		var url = baseUrl + "equipmentTypeManage/deleteEquipmentType";
		var data = {equipmentTypeList:JSON.stringify(equipmentTypeList)};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('删除器材类型', '成功');
				$scope.getEquipmentTypeList();
			} else {
				toastr.error('删除器材类型', '失败');
			}
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(typeid) {
		$state.go("editEquipmentType",{typeid:typeid});
	}

}]);