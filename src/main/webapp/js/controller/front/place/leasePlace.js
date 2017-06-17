controllers.controller("leasePlace", ['$scope','$rootScope','$http','$state','$stateParams','$timeout',
	function($scope,$rootScope,$http,$state,$stateParams,$timeout) {
	$scope.placeTypeList = [];
	$scope.placeStatusList = [];
	$scope.statusTypeList = ["空闲","上课"];
	$scope.place = new PlaceVo();
	$scope.place.placeType = new PlaceTypeVo();
	$scope.tempPerCost = 0; 

	//获取场地类型类别
	$scope.getPlaceTypeList = function() {
		var pageVo = new PageVo();
		pageVo.pageNum = 1;
		pageVo.pageSize = 500;
		var url = baseUrl + "placeTypeManage/selectPlaceTypeList?page=" + pageVo.voToJson();
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
				$scope.initStartTimeOption();
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.initPlaceStatus();

	//初始化开始时间数组
	$scope.startTimeOption = [];
	$scope.initStartTimeOption = function() {
		$scope.startTimeOption = [];
		for(var i=0;i<$scope.placeStatusList.length;i++) {
			if($scope.placeStatusList[i].placeStatus == "空闲") {
				var timeOption = {
						id:$scope.placeStatusList[i].timeId,
						timeOption:"星期" + $scope.placeStatusList[i].time.day + "   " 
						+ "第" + $scope.placeStatusList[i].time.course + "节",
						day:$scope.placeStatusList[i].time.day,
						course:$scope.placeStatusList[i].time.course,
						index:i,
						startTime:$scope.placeStatusList[i].time.startTime,
						endTime:$scope.placeStatusList[i].time.endTime
				}
				$scope.startTimeOption.push(timeOption);
			}
		}
		$scope.startTime = $scope.startTimeOption[0];
		$scope.initEndTimeOption();
	}

	//初始化结束时间数组
	$scope.endTimeOption = [];
	$scope.initEndTimeOption = function() {
		$scope.endTimeOption = [];
		$scope.endTimeOption.push($scope.startTime);
		if($scope.startTime.course<5) {
			for(var j=0;j<(5-$scope.startTime.course);j++) {
				if($scope.placeStatusList[$scope.startTime.index+(j+1)*7].placeStatus == "空闲") {
					var i = $scope.startTime.index+(j+1)*7;
					var timeOption = {
							id:$scope.placeStatusList[i].timeId,
							timeOption:"星期" + $scope.placeStatusList[i].time.day + "   " 
							+ "第" + $scope.placeStatusList[i].time.course + "节",
							day:$scope.placeStatusList[i].time.day,
							course:$scope.placeStatusList[i].time.course,
							index:i,
							startTime:$scope.placeStatusList[i].time.startTime,
							endTime:$scope.placeStatusList[i].time.endTime
					}
					$scope.endTimeOption.push(timeOption);
				}
			}
		}
		$scope.endTime = $scope.endTimeOption[0];
	}
	
	//计算费用
	$scope.costCount = function() {
		var count = $scope.endTime.course-$scope.startTime.course+1;
		$scope.place.cost = count * $scope.tempPerCost;
	}

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
			$scope.tempPerCost = rPlace.cost;
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

	$scope.submit = function() {
		$scope.placeLeaseRecord = new PlaceLeaseRecordVo();
		$scope.placeLeaseRecord.placeId = $scope.place.id;
		$scope.placeLeaseRecord.startTime = $scope.startTime.startTime;
		$scope.placeLeaseRecord.endTime = $scope.endTime.endTime;
		$scope.placeLeaseRecord.userId = sessionStorage.getItem("userId");
		$scope.placeLeaseRecord.cost = $scope.place.cost;
		var placeStatusList = [];
		for(var i=0;i<($scope.endTime.course-$scope.startTime.course+1);i++) {
			var tempPlaceStatus = new PlaceStatusVo();
			tempPlaceStatus.placeId = $scope.place.id;
			tempPlaceStatus.timeId = $scope.placeStatusList[$scope.startTime.index+i*7].timeId;
			placeStatusList.push(tempPlaceStatus);
		}
		var url = baseUrl + "placeLeaseRecordFront/leasePlace";
		var data = {
				placeLeaseRecord:$scope.placeLeaseRecord.voToJson(),
				placeStatusList:JSON.stringify(placeStatusList)
		};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('预定场地', '成功');
			$scope.goBack();
		});
	}
}]);