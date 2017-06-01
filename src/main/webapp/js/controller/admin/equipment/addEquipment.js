controllers.controller("addEquipment", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.place = new PlaceVo();
	
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
		if($scope.placeForm.$invalid) return;
		var url = baseUrl + "equipmentManage/addEquipment";
		var data = {equipment:$scope.equipment.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('添加器材', '成功');
			$scope.goBack();
		});
	}
}]);