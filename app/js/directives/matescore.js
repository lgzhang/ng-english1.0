'use strict';

angular.module('English').directive('appMatescore', function() {
      
      return {
	    restrict: 'EA',
	    templateUrl: 'views/course/app/matescore.html',
	    controller:'classmateScoreController'
	  }
});


