'use strict';
English.controller('breifCtrl', function($scope) {
	$scope.totalItems = 15;
  	$scope.currentPage = 1;

	$scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
    	console.log('Page changed to: ' + $scope.currentPage);
  };

});