angular.module('myApp', [])
	.controller('MyCtrl', function($scope) {
		$scope.base_meal_price;
		$scope.tax_rate;
		$scope.tip_percentage;
		$scope.cust_sub_total = 0;
		$scope.cust_tip = 0;
		$scope.cust_total = 0;
		$scope.tip_total = 0;
		$scope.meal_count = 0;
		$scope.avg_tip = 0;
		$scope.show_error = false;
		
	$scope.submit = function() {
		$scope.show_error = true;
		if ($scope.mealForm.$valid) {
			$scope.cust_sub_total = $scope.base_meal_price + ($scope.base_meal_price * $scope.tax_rate/100);
			$scope.cust_tip = $scope.base_meal_price * $scope.tip_percentage/100;
			$scope.cust_total = $scope.cust_sub_total + $scope.cust_tip;
			$scope.tip_total = $scope.tip_total + $scope.cust_tip;
			$scope.meal_count++;
			$scope.avg_tip = $scope.tip_total/$scope.meal_count;
			$scope.cancel();
		};
	};

	$scope.cancel = function() {
		delete $scope.base_meal_price;
		delete $scope.tax_rate;
		delete $scope.tip_percentage;
		$scope.show_error = false;
	};

	$scope.reset = function() {
		$scope.cancel();
		$scope.tip_total = 0;
		$scope.avg_tip = 0;
		$scope.meal_count = 0;
		delete $scope.cust_sub_total;
		delete $scope.cust_tip;
		delete $scope.cust_total;
	};

	})