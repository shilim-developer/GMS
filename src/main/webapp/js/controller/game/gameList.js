controllers.controller("gameList", ['$scope','$http','$state',function($scope,$http,$state) {
	$scope.checkAll = false;//全选
	$scope.gameList = [];
	$scope.page = new PageVo();


	$scope.page.pageNum = 1;
	$scope.page.pageSize = 3;
	//获取赛事列表
	$scope.getGameList = function() {
		//是否存在缓存页数
		if(sessionStorage.gameListPageNum) $scope.page.pageNum = sessionStorage.gameListPageNum;
		var url = baseUrl + "gameManage/selectGameList?page=" + $scope.page.voToJson();
		$http.get(url)
		.success(function(data) {
			console.log(data);
			$scope.gameList = data.resultParam;
			$scope.page.pageNum = $scope.gameList.pageNum;
		});
	}
	$scope.getGameList();

	//上一页
	$scope.lastPage = function(pageNum) {
		console.log(pageNum);
		if(pageNum <= 0) return;
		sessionStorage.gameListPageNum = pageNum;
		$scope.getGameList();
	}

	//下一页
	$scope.nextPage = function(pageNum) {
		console.log($scope.gameList.pages)
		if(pageNum > $scope.gameList.pages) return;
		sessionStorage.gameListPageNum = pageNum;
		$scope.getGameList();
	}

	//跳转指定页
	$scope.toPage = function(e) {
		if(e && e.keyCode != 13) return;
		if($scope.page.pageNum <=0 || 
				$scope.pageNum > $scope.gameList.pages ||
				typeof $scope.page.pageNum != "number") {
			sessionStorage.gameListPageNum = pageNum;
			return;
		}
		$scope.getGameList();
	}

	//赛事查询
	$scope.searchGame = function(e) {
		if(e && e.keyCode != 13) return;
		sessionStorage.gameListPageNum = 1;
		$scope.page.fuzzy = true;
		$scope.getGameList();
	}

	//全选
	$scope.$watch('checkAll',function() {
		if(!$scope.gameList.list) return;
		if($scope.checkAll) {
			for(var i=0;i<$scope.gameList.list.length;i++) {
				$scope.gameList.list[i].checked = true;
			}
		} else {
			for(var i=0;i<$scope.gameList.list.length;i++) {
				$scope.gameList.list[i].checked = false;
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

	//赛事删除
	$scope.deleteGame= function() {
		var gameList = [];
		if($scope.deleteType == "one") {
			var gameVo = new GameVo();
			gameVo.id = $scope.deleteId;
			gameList.push(gameVo);
		} else if ($scope.deleteType == "batch") {
			for(var i=0;i<$scope.gameList.list.length;i++) {
				if($scope.gameList.list[i].checked) {
					var gameVo = new GameVo();
					gameVo.id = $scope.gameList.list[i].id;
					gameList.push(gameVo);	
				}
			}
		}
		var url = baseUrl + "gameManage/deleteGame";
		var data = {gameList:JSON.stringify(gameList)};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('删除赛事', '成功');
			$scope.getGameList();
		});
	}
	
	//跳转修改页
	$scope.toEditPage = function(id) {
		$state.go("editGame",{id:id});
	}

}]);