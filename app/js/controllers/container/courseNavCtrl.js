'use strict';
English.controller('courseNavCtrl', function(NavData, $scope) {
  $scope.groups = NavData[1].items;

  $scope.status = {
    isFirstOpen: true
  };

  $scope.show = false;
  $scope.isShow = function(show) {
    $scope.show = !show;
  }
});