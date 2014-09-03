//var English = angular.module('English', []);

/*D E 同学分数*/
English.controller('classmateScoreController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/classmateScore.json').
		success(function(data) {
			$scope.classmateScoreDetail = data;
			$scope.bestScore = function(e) {
				return e.score > 90;
			};
		});
	}
]);

/*c 同学分数*/
English.controller('ScoreCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/C_classmateScore.json').
		success(function(data) {
			$scope.classmateScoreDetail = data;
			$scope.bestScore = function(e) {
				return e.score > 90;
			};
		});
	}
]);



/*E听写句子我的历史分数*/
English.controller('E_MyHistoryGradingController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/E_MyHistoryGrad.json').
		success(function(data) {
			$scope.MyHistoryGradingDetail = data;
		});
	}
]);

/*C跟读练习我的历史分数*/
English.controller('historyctrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/C_MyHistoryGrad.json').
		success(function(data) {
			$scope.MyHistoryGrads = data;
		});
	}
]);


/*D听力练习我的历史分数*/
English.controller('D_MyHistoryGradingController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/D_MyHistoryGrad.json').
		success(function(data) {
			$scope.MyHistoryGradingDetail = data;
		});
	}
]);

/*E听写句子常错试题错误率*/
English.controller('E_wordIncorrectnessController', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/E_wordincorrectness.json').
		success(function(data) {
			$scope.wordError = data;

			$scope.ErrorRateDescending = '-incorrectness';

			$scope.bigIncorrectness = function(e) {
				return e.incorrectness > 50;
			};
		});
	}
]);

/*D听力练习常错试题错误率*/
English.controller('incorrectCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('API/json/wordincorrectness.json').
		success(function(data) {
			$scope.wordError = data;
			console.log(data);

			$scope.ErrorRateDescending = '-incorrectness';

			$scope.bigIncorrectness = function(e) {
				return e.incorrectness > 50;
			};
		});
	}
]);


/*D E详情切换*/

function toggleDetailController($scope) {
	$scope.Detailchecked = false;
	$scope.toggleDetail = function() {
		$scope.Detailchecked = !$scope.Detailchecked;
	};
}

// .directive('myDialog', function() {
//       return {
//         restrict: 'E',
//         transclude: true,
//         templateUrl: 'my-dialog.html'
//       };
// });