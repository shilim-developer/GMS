controllers.controller("addEquipmentType", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.equipmentType = new EquipmentTypeVo();
	
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
		var url = baseUrl + "equipmentTypeManage/addEquipmentType";
		var data = {equipmentType:$scope.equipmentType.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			if(data.serviceResult == 1) {
				toastr.success('添加器材类型', '成功');
				$scope.goBack();
			} else {
				toastr.error('添加器材类型', '失败');
			}
		});
	}
}]);