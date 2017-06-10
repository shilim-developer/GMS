controllers.controller("addEquipment", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.equipmentTypeList = [];
	$scope.equipment = new EquipmentVo();
	$scope.equipment.equipmentType = new EquipmentTypeVo();

	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("equipmentList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.equipmentForm.$invalid) return;
		var url = baseUrl + "equipmentManage/addEquipment";
		var data = {equipment:$scope.equipment.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('添加器材', '成功');
				$scope.goBack();
			} else {
				toastr.error('添加器材', '失败');
			}
		});
	}

	//获取器材类型类别
	$scope.getEquipmentTypeList = function() {
		var pageVo = new PageVo();
		pageVo.pageNum = 1;
		pageVo.pageSize = 500;
		var url = baseUrl + "/equipmentTypeManage/selectEquipmentTypeList?page=" + pageVo.voToJson();
		$http.get(url)
		.success(function(data) {
			if(data.serviceResult == 1) {
				$scope.equipmentTypeList = data.resultParam.list;
				$scope.equipment.equipmenttype.typeid = $scope.equipmentTypeList?$scope.equipmentTypeList[0].typeid:'';
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getEquipmentTypeList();
	
	
}]);