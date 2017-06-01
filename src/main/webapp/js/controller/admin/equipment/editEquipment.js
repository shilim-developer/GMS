controllers.controller("editPlace", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.equipment = new EquipmentVo();
	
	//获取场地信息
	$scope.getEquipment = function() {
		var equipmentVo = new EquipmentVo();
		equipmentVo.id = $stateParams.id;
		var url = baseUrl + "equipmentManage/selectOneEquipment";
		var data = {place:placeVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rPlace = data.resultParam; 
			$scope.place.id = rPlace.id;
			$scope.place.placeName = rPlace.placeName;
			$scope.place.placeLocation = rPlace.placeLocation;
			$scope.place.placeType = rPlace.placeType;
			$scope.place.cost = rPlace.cost;
		});
	}
	$scope.getPlace();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("placeList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.placeForm.$invalid) return;
		var url = baseUrl + "placeManage/updatePlace";
		var data = {place:$scope.place.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改场地', '成功');
			$scope.goBack();
		});
	}
}]);