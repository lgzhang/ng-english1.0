'use strict';
English.controller('navleftCtrl', function(NavData, $scope) {
  $scope.groups = NavData[2].items;

  $scope.status = {
    isFirstOpen: true
  };

  $scope.show = false;
  $scope.isShow = function(show) {
    $scope.show = !show;
  }
});