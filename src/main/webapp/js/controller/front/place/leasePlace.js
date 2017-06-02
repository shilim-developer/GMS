controllers.controller("leasePlace", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.placeTypeList = [];
	$scope.placeStatusList = [];
	$scope.statusTypeList = ["空闲","上课"];
	$scope.place = new PlaceVo();
	$scope.place.placeType = new PlaceTypeVo();
	
	//获取场地类型类别
	$scope.getPlaceTypeList = function() {
		var pageVo = new PageVo();
		pageVo.pageNum = 1;
		pageVo.pageSize = 500;
		var url = baseUrl + "/placeTypeManage/selectPlaceTypeList?page=" + pageVo.voToJson();
		$http.get(url)
		.success(function(data) {
			if(data.serviceResult == 1) {
				$scope.placeTypeList = data.resultParam.list;
				$scope.place.placeType.id = $scope.placeTypeList?$scope.placeTypeList[0].id:'';
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getPlaceTypeList();
	
	//生成场地状态数组
	$scope.initPlaceStatus = function() {
		var placeStatusVo = new PlaceStatusVo();
		placeStatusVo.placeId = $stateParams.id;
		var url = baseUrl + "placeStatusManage/getPlaceStatusListByPlaceId";
		var data = {placeStatus:placeStatusVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.placeStatusList = data.resultParam;
				$("#statusTips").modal("show");
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.initPlaceStatus();
	
	//获取场地信息
	$scope.getPlace = function() {
		var placeVo = new PlaceVo();
		placeVo.id = $stateParams.id;
		var url = baseUrl + "placeManage/selectOnePlace";
		var data = {place:placeVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rPlace = data.resultParam; 
			$scope.place.id = rPlace.id;
			$scope.place.placeName = rPlace.placeName;
			$scope.place.placeLocation = rPlace.placeLocation;
			$scope.place.placeType.id = rPlace.placeType.id;
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
		var data = {
				place:$scope.place.voToJson(),
				placeStatusList:JSON.stringify($scope.placeStatusList)
		};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改场地', '成功');
			$scope.goBack();
		});
	}
}]);