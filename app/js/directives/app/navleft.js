'use strict';

English.directive('appNav',function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/container/navleft.html',
    controller: 'navleftCtrl'
  }
});
