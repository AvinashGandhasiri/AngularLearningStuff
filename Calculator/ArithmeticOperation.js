var app = angular.module('calculatorApp', []);
app.controller('operations', function($scope) {
    $scope.Addition = function(valueOne, valueTwo) {	
		$scope.result= parseInt(valueOne)+parseInt(valueTwo);
	
	}
	$scope.DIV = function(valueOne, valueTwo) {				
		$scope.result=  parseInt(valueOne)/parseInt(valueTwo);
	}	
	
	 $scope.MUL = function(valueOne, valueTwo) {
		$scope.result=  parseInt(valueOne)*parseInt(valueTwo);
	}
	$scope.SUB = function(valueOne, valueTwo) {
		$scope.result=  parseInt(valueOne)-parseInt(valueTwo);
	}
	$scope.Perc = function(valueOne, valueTwo) {
		$scope.result=  parseFloat(valueOne)%parseFloat(valueTwo);
	}
});