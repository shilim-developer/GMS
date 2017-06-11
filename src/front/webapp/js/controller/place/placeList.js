controllers.controller("placeList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.placeList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取场地列表
	$scope.getPlaceList = function() {
		//是否存在缓存页数
		if(sessionStorage.placeListPageNum) $scope.page.pageNum = sessionStorage.placeListPageNum;
		var url = baseUrl + "placeManage/selectPlaceList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			$scope.placeList = data.resultParam;
			$scope.page.pageNum = $scope.placeList.pageNum;
		});
	}
	$scope.getPlaceList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.placeListPageNum = pageNum;
		$scope.getPlaceList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.placeList.pages)
		if(pageNum > $scope.placeList.pages) return;
		sessionStorage.placeListPageNum = pageNum;
		$scope.getPlaceList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.pageNum > $scope.placeList.pages ||
				typeof $scope.page.pageNum != "number") {
			sessionStorage.placeListPageNum = pageNum;
			return;
		}
		$scope.getPlaceList();
	}

	//场地查询
	$scope.searchPlace = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.placeListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getPlaceList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.placeList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.placeList.list.length;i++) {
				$scope.placeList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.placeList.list.length;i++) {
				$scope.placeList.list[i].checked = false;
			}
		}
	});

	//删除确认提示
	$scope.deleteType = "";
	$scope.deleteId = ""
	$scope.deleteTips = function(type,id) {
		$scope.deleteType = type;
		if(id){
			$scope.deleteId = id;
		}
		$("#deleteTips").modal("show");
	}

	//场地删除
	$scope.deletePlace= function() {
		var placeList = [];
		if($scope.deleteType == "one") {
			var placeVo = new PlaceVo();
			placeVo.id = $scope.deleteId;
			placeList.push(placeVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.placeList.list.length;i++) {
				if($scope.placeList.list[i].checked) {
					var placeVo = new PlaceVo();
					placeVo.id = $scope.placeList.list[i].id;
					placeList.push(placeVo);	
				}
			}
		}
		var url = baseUrl + "placeManage/deletePlace";
		var data = {placeList:JSON.stringify(placeList)};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('删除场地', '成功');
			$scope.getPlaceList();
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editPlace",{id:id});
	}

}]);