

var app= angular.module("myShoppingCart", []);

app.controller("myShpngCart", function($scope){

		$scope.products = ["Milk","Bread","Cheese"];
  
		$scope.addItem = function(){
			
			$scope.errorMessage = "";
			if (!$scope.enterItem) {return;} 
			if($scope.products.indexOf($scope.enterItem) == -1){    
				
				$scope.products.push($scope.enterItem);
			} else {
  
				$scope.errorMessage="The item you entered is already in your cart.";
  
			}	
		}
  
		$scope.removeItem = function(x){
				$scope.errorMessage = "";
				
				$scope.products.splice(x, 1);
		}





});