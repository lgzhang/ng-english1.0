'use strict';

angular.module('English').directive('appRight', function() {
      
      return {
    restrict: 'EA',
    templateUrl: 'views/course/app/TheRightBar.html',
    controller:'ScoreCtrl'
  }
});

