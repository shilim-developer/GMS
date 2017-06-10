controllers.controller("editEquipment", ['$scope','$http','$state','$stateParams','$timeout',
	function($scope,$http,$state,$stateParams,$timeout) {
	$scope.equipmentTypeList = [];
	$scope.equipment = new EquipmentVo();
	$scope.equipment.equipmentType = new EquipmentTypeVo();
	
	//获取器材类型类别
	$scope.getEquipmentTypeList = function() {
		var pageVo = new PageVo();
		pageVo.pageNum = 1;
		pageVo.pageSize = 500;
		var url = baseUrl + "/equipmentTypeManage/selectEquipmentTypeList?page=" + pageVo.voToJson();
		$http.get(url)
		.success(function(data) {
			if(data.serviceResult == 1) {
				$scope.equipmentTypeList = data.resultParam.list;
				$scope.equipment.equipmentType.typeid = $scope.equipmentTypeList?$scope.equipmentTypeList[0].typeid:'';
			} else {
				toastr.error('获取数据', '失败');
			}
		})
		.error(function(data) {
			toastr.error('获取数据', '失败');
		});
	}
	$scope.getEquipmentTypeList();
	
		
	//获取器材信息
	$scope.getEquipment = function() {
		var equipmentVo = new EquipmentVo();
		equipmentVo.equipmentid = $stateParams.equipmentid;
		var url = baseUrl + "equipmentManage/selectOneEquipment";
		var data = {equipment:equipmentVo.voToJson()};
		$http.post(url,data)
		.success(function(data) {
			var eq = data.resultParam; 
			$scope.equipment.equipmentid = eq.equipmentid;
			$scope.equipment.equipmentname = eq.equipmentname;
			$scope.equipment.equipmentType.typeid = eq.equipmentType.typeid;
			$scope.equipment.estandard = eq.estandard;
			$scope.equipment.eprice = eq.eprice;
			$scope.equipment.totalnum = eq.totalnum;
			$scope.equipment.loanablenum = eq.loanablenum;
		});
	}
	$scope.getEquipment();
	
	//返回
	$scope.goBackTips = function() {
		$("#goBackTips").modal("show");
	}
	$scope.goBack = function() {
		$("#goBackTips").modal("hide");
		$timeout(function() {
			$state.go("equipmentList");
		},300);
	}
	
	$scope.valid = false;
	$scope.submit = function() {
		$scope.valid = true;
		if($scope.equipmentForm.$invalid) return;
		var url = baseUrl + "equipmentManage/updateEquipment";
		var data = {
				equipment:$scope.equipment.voToJson()
		};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('修改器材', '成功');
			$scope.goBack();
		});
	}
}]);