myModule.config(function($stateProvider,$urlRouterProvider){
   	$urlRouterProvider.otherwise("/Newissue");
   	$stateProvider
   		.state('Issues',{
   			url:'/Issues',
			templateUrl:'myapp/components/issues.html',
			controller:'addTotable'

   		})
   		.state('Newissue',{
   			url:'/Newissue',
			templateUrl:'myapp/components/newissue.html',
   			controller:'addTotable'
   		});
   });