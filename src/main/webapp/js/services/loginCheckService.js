controllers.service('loginCheckService', ['$window',function($window) {
    this.loginCheck = function (serviceResult) {
    	console.log(serviceResult);
        if(serviceResult == 4) {
        	$window.location.href = "login.html";
        }
    }
}]);