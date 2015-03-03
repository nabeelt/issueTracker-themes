myModule
 	.controller('addTotable',['$scope','newService','$localStorage','$state',
 		function($scope,newService,$localStorage,$state){  
			$scope.names = [];
			$scope.item = {};        
			if(!$localStorage.data){					
				newService.getData()
					.success(function(data){
						$scope.names=$localStorage.data=data;
				});	
			}
			else{
				$scope.names=$localStorage.data;
			}

			$scope.insert=function(){
				console.log($scope.item);
				var item={};
				item=$scope.item;
				var doc = {
					assignee: item.assignee,
					subject : item.subject
				};
				var x=$localStorage.data||[];
				x.push(doc);
				console.log(x);
				$localStorage.data=x;
				$scope.isModalOpen=true;

				window.setTimeout(function () {
					$state.go('Issues');
					},500);
			
				
			}
			// $scope.animate=function(){
			// 	isAnimate= true;
			// }
			$scope.clearStoragedata= function(){
				if($localStorage.data)
				{
					delete $localStorage.data;
					window.setTimeout(function(){
						$state.go('Issues');
						},1500);
				}
			}
			$scope.showIssues=function(){
				window.setTimeout(function () {
					$state.go('Issues');
					},500);
			}

 	}]);
myModule.controller('addcount',['$scope','$localStorage',function($scope,$localStorage){
	$scope.addCount=function(index){
		$localStorage.data[index].prioLevel=$scope.key;
	
	}
	// $scope.deleteKey = function(){
		
	// 	 $scope.key ="";
	// }
}]);
myModule.controller('themeController',['$scope',function($scope){
	$scope.theme1=function(){
		$scope.css="theme1";
	}
	$scope.theme2=function(){
		$scope.css="theme2";
	}
	$scope.theme3=function(){
		$scope.css="theme3";
	}
}]);