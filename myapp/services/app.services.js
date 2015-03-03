myModule.factory('newService',['$http',
	function($http){
		var urlBase='IssueList.json';
		var newService={};
		newService.getData=function(){
			return $http.get(urlBase);
		}
		return newService;
}]);