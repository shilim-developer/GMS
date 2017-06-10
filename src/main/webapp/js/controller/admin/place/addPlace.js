controllers.controller("addPlace", ['$scope','$http','$state','$timeout',function($scope,$http,$state,$timeout) {
	$scope.placeTypeList = [];
	$scope.placeStatusList = [];
	$scope.statusTypeList = ["空闲","上课"];
	$scope.place = new PlaceVo();
	$scope.place.placeType = new PlaceTypeVo();

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
				console.log(place.placeType.id);
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
		var url = baseUrl + "/timeOptionManage/selectAllTimeOption";
		$http.get(url)
		.success(function(data) {
			if(data.serviceResult == 1) {
				$scope.timeOptionList = data.resultParam;
				for(var i=0;i<$scope.timeOptionList.length;i++) {
					var tempPlaceStatus = new PlaceStatusVo();
					tempPlaceStatus.id = $scope.timeOptionList[i].id;
					$scope.placeStatusList.push(tempPlaceStatus);
				}
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.initPlaceStatus();

	$scope.valid = false;
	$scope.submit = function() {
		console.log($scope.placeStatusList);
		$scope.valid = true;
		if($scope.placeForm.$invalid) return;
		var url = baseUrl + "placeManage/addPlace";
		var data = {
				place:$scope.place.voToJson(),
				placeStatusList:JSON.stringify($scope.placeStatusList)
		};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('新增场地', '成功');
			$scope.goBack();
		});
	}
}]);