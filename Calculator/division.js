<script>
var app = angular.module('calculatorApp', []);
app.controller('operations', function($scope) {
    $scope.Addition = function(valueOne, valueTwo) {
		$scope.result= valueOne/valueTwo;
	}	
});
</script> 