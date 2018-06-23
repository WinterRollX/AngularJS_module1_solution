(function () {
	'use strict';
	angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckControllerFun);

	LunchCheckControllerFun.$inject = ['$scope'];

	function LunchCheckControllerFun($scope) {
		$scope.lunchString = "";
		$scope.response = "";
		
		$scope.checkLunchItem = function () {
			// Check the number of Item in the input box, change response if necessary.
			var checkRegx = /\s+/g;

			if ( (checkRegx.test($scope.lunchString)) || $scope.lunchString.length ==0) {
				$scope.response = "Please enter data first!";
				return;
			}else {

			var count = $scope.lunchString.split(",").length;
			if (count <=3) {$scope.response = "Enjoy!";}else{$scope.response = "Too much!";}	
			}

			
		}


	}








})();