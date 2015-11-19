// App
var app = angular.module('app', []);

// Service to fetch some data..
app.factory('dataServ', ['$http',function($http) {
	return {
		get : function() {
			return $http.get('/data');
		}
	}
}]);

// App controller
app.controller('appController', ['$scope','dataServ', function($scope, Data) {
	
	$scope.funnyStuff = {question: '', answer: ''};

	Data.get()
		.success(function(resp) {
			$scope.funnyStuff = resp;
		});
}]);