controllers.controller("editPlaceType", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.placeType = new PlaceTypeVo();
	
	//获取场地信息
	$scope.getPlaceType = function() {
		var placeTypeVo = new PlaceTypeVo();
		placeTypeVo.id = $stateParams.id;
		var url = baseUrl + "placeTypeManage/selectOnePlaceType";
		var data = {placeType:placeTypeVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rPlaceType = data.resultParam; 
			$scope.placeType.id = rPlaceType.id;
			$scope.placeType.placeTypeName = rPlaceType.placeTypeName;
		});
	}
	$scope.getPlaceType();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("placeTypeList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.placeTypeForm.$invalid) return;
		var url = baseUrl + "placeTypeManage/updatePlaceType";
		var data = {placeType:$scope.placeType.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改场地类型', '成功');
			$scope.goBack();
		});
	}
}]);