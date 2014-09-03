'use strict';
English.controller('headerCtrl', function($scope) {
  $scope.isCollapsed = false;
  $scope.mainNav = 'home';
  $scope.checkModel = {
    home: true,
    course: false,
    studio: false,
    app: false
  };
});