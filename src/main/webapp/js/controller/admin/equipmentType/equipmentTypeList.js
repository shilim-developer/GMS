controllers.controller("equipmentTypeList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.equipmentTypeList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取场地列表
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
	$scope.searchPlace = function(e) {
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
		var equipmentTypeList = [];
		if($scope.deleteType == "one") {
			var placeVo = new PlaceVo();
			placeVo.id = $scope.deleteId;
			equipmentTypeList.push(placeVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.equipmentTypeList.list.length;i++) {
				if($scope.equipmentTypeList.list[i].checked) {
					var placeVo = new PlaceVo();
					placeVo.id = $scope.equipmentTypeList.list[i].id;
					equipmentTypeList.push(placeVo);	
				}
			}
		}
		var url = baseUrl + "placeManage/deletePlace";
		var data = {equipmentTypeList:JSON.stringify(equipmentTypeList)};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('删除场地', '成功');
			$scope.getEquipmentTypeList();
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editPlace",{id:id});
	}

}]);