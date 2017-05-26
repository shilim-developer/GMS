controllers.controller("addPlace", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.place = new PlaceVo();
	
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
		var url = baseUrl + "placeManage/addPlace";
		var data = {place:$scope.place.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('新增场地', '成功');
			$scope.goBack();
		});
	}
}]);