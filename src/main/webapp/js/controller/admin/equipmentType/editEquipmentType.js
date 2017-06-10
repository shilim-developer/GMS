controllers.controller("editEquipmentType", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.equipmentType = new EquipmentTypeVo();
	
	//获取器材类型信息
	$scope.getEquipmentType = function() {
		var equipmentTypeVo = new EquipmentTypeVo();
		equipmentTypeVo.typeid = $stateParams.typeid;
		var url = baseUrl + "equipmentTypeManage/selectOneEquipmentType";
		var data = {equipmentType:equipmentTypeVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var et = data.resultParam;
			if(data.serviceResult == 1) {
				$scope.equipmentType.typeid = et.typeid;
				$scope.equipmentType.typename = et.typename;
			} else {
				toastr.error('修改器材类型', '失败');
			}
		});
	
	}
	$scope.getEquipmentType();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("equipmentTypeList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.equipmentTypeForm.$invalid) return;
		var url = baseUrl + "equipmentTypeManage/updateEquipmentType";
		var data = {equipmentType:$scope.equipmentType.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('修改器材类型', '成功');
				$scope.goBack();
			} else {
				toastr.error('修改器材类型', '失败');
			}
		});
	}
}]);