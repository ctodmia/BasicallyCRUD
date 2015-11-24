var myapp = angular.module('myapp', [])

myapp.controller('ProductController', ['$scope', function($scope){

	$scope.productList = [

		{id : '1', name : 'purse', amount : '5'},

		{id : '2', name : 'car', amount : '2'},

		{id : '3', name : 'roses', amount : '5'},


	];

	$scope.add = function(id){
		var index = selectId(id);
		$scope.productList.push({id: $scope.id, name: $scope.name, amount: $scope.amount})
		$scope.id='';
		$scope.name= '';
		$scope.amount = '';

	}

	$scope.update = function() {
		var index = selectId($scope.id);
		console.log('this is index update', index)
		$scope.productList[index].id = $scope.id;
		$scope.productList[index].name = $scope.name;
		$scope.productList[index].amount = $scope.amount;

	}
	$scope.edit = function(id) {
		var index = selectId(id);
		console.log('this is index', index)
		var item = $scope.productList[index];
		$scope.id = item.id;
		$scope.name = item.name;
		$scope.amount = item.amount;
	};


	$scope.del = function(id){
		index = selectId(id);
		$scope.productList.splice(index, 1);

	};

	//we need to create a function that knows when 


	function selectId(id) {
		for(var i=0; i<$scope.productList.length; i++){
			if($scope.productList[i].id === id){
				return i;
				console.log('this is i', i)
			}
		}
	}
}])
