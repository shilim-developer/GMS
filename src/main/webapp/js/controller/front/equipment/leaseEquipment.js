controllers.controller("leaseEquipment", ['$scope','$rootScope','$http','$state','$stateParams','$timeout',
	function($scope,$rootScope,$http,$state,$stateParams,$timeout) {
	$scope.equipmentTypeList = [];
	$scope.days = [1,2,3];
	$scope.equipment = new EquipmentVo();
	$scope.equipmentloan = new EquipmentloanVo();
	$scope.equipment.equipmentType = new EquipmentTypeVo();
	$scope.equipmentloan.equipment = new EquipmentVo();
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
	
	
	
		
	//获取器材租借列表信息
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
			$scope.equipment.equipmentType.typename = eq.equipmentType.typename;
			$scope.equipment.estandard = eq.estandard;
			$scope.equipment.eprice = eq.eprice;
			$scope.equipment.loanablenum = eq.loanablenum;
			$scope.equipmentloan.rentnum = 1;
			$scope.equipmentloan.epayment = $scope.equipmentloan.rentnum * $scope.equipment.eprice;
			$scope.equipmentloan.startdate = new Date().format("yyyy-MM-dd");
			$scope.addDate();
			
			 

			
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
	
	$scope.count = function() {
		if($scope.equipmentloan.rentnum < 0 || $scope.equipmentloan.rentnum > $scope.equipment.loanablenum )
			$scope.equipmentloan.rentnum =1;
		$scope.equipmentloan.epayment = $scope.equipmentloan.rentnum * $scope.equipment.eprice;
	}
	
	
	//租借天数
	$scope.costDate = function(){  
		
		}
	      
    
	         
	
	
	$scope.addDate = function(){ 
		var d=new Date($scope.equipmentloan.startdate); 
		d.setDate(d.getDate()+$scope.rentday); 
		var month=d.getMonth()+1; 
		var day = d.getDate(); 
		if(month<10){ 
		month = "0"+month; 
		} 
		if(day<10){ 
		day = "0"+day; 
		} 
		$scope.equipmentloan.enddate = d.getFullYear()+"-"+month+"-"+day; 
		}
	
	//确定
	$scope.submit = function() {
		$scope.equipmentloan.ename = $scope.equipment.equipmentname;
		$scope.equipmentloan.rentnum = $scope.equipmentloan.rentnum;
		$scope.equipmentloan.epayment = $scope.equipmentloan.epayment;
		$scope.equipmentloan.userId = $rootScope.sysUser.id;
		$scope.equipmentloan.startdate = $scope.equipmentloan.startdate;
		$scope.equipmentloan.enddate = $scope.equipmentloan.enddate;
		var url = baseUrl + "equipmentloanFront/leaseEquipment";
		var data = { 
				equipmentloan:$scope.equipmentloan.voToJson()
		};
		$http.post(url,data)
		.success(function(data) {
			toastr.success('预定器材', '成功');
			$scope.goBack();
		});
	}
}]);