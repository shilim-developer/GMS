controllers.controller("checkGame", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.game = new GameVo();
	
	//获取赛事状态
	$scope.checkGame = function() {
		var gameVo = new GameVo();
		gameVo.id = $stateParams.id;
		var url = baseUrl + "gameManage/selectOneGame";
		var data = {game:gameVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var rGame = data.resultParam; 
			$scope.game.id = rGame.id;
			$scope.game.gamename = rGame.gamename;
			$scope.game.gametype = rGame.gametype;
			$scope.game.gameplace = rGame.gameplace;
			$scope.game.equip = rGame.equip;
			$scope.game.gametime = rGame.gametime;
			$scope.game.gamedec = rGame.gamedec;
			$scope.game.status = rGame.status;
		});
	}
	$scope.checkGame();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("gameList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.checkGameForm.$invalid) return;
		var url = baseUrl + "gameManage/updateGame";
		var data = {game:$scope.game.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('审核赛事', '成功');
			$scope.goBack();
		});
	}
	
	//审核赛事
	$scope.check = function(status) {
		$scope.game.status=status; 
	}
}]);