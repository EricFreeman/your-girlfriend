var module = angular.module('mainApp', ['ngRoute']);

module.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/documentation', {
				templateUrl: 'documentation.html'
			}).
			otherwise({
				redirectTo: '/documentation'
			});
	}
]);

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}