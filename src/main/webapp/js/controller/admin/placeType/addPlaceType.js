controllers.controller("addPlaceType", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.placeType = new PlaceTypeVo();
	
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
		var url = baseUrl + "placeTypeManage/addPlaceType";
		var data = {placeType:$scope.placeType.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('新增场地类型', '成功');
			$scope.goBack();
		});
	}
}]);