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

/*E听写句子Left*/
English.controller('E_Englishparagraph', ['$scope', '$http', 'dataServices',
	function($scope, $http, dataServices) {
		$http.get('API/json/englishparagraph.json').
		success(function(data) {
			$scope.Englishparagraph = data;
			$scope.show = false;
			$scope.btn = function() {
				$scope.show = !$scope.show;
			};
			$scope.myinput = '';
			$scope.chushi = "--";
			$scope.myletterInfo = [];
			$scope.myindex = -1;
			$scope.compare = function() {
				if ($scope.myindex < $scope.Englishparagraph.length - 1) {
					$scope.myindex++
				} else {
					return false
				};
				var eachsentence = $scope.Englishparagraph[$scope.myindex].eachsentence;
				var letters = eachsentence.split(" ");
				var myinputLetters = $scope.myinput.split(/\s+/g);
				var lettersHtml = "";
				var cuocount = 0;
				$scope.chushi = "/";
				
				for (var i = 0; i < letters.length; i++) {

					if (!myinputLetters[i]) //我没写的单词
					{
						lettersHtml += '<span class="Orange">' + letters[i] + '</span> ';
					} else if (myinputLetters[i] != letters[i]) {
						var zimu = letters[i].split("");
						var myLetter = myinputLetters[i].split("");
						for (var j = 0; j < zimu.length; j++) {
							if (!myLetter[j]) {
								lettersHtml += '<span class="Orange">' + zimu[j] + '</span>';
							} else if (myLetter[j] != zimu[j]) {
								lettersHtml += '<span class="red">' + zimu[j] + '</span>';
							} else {
								lettersHtml += zimu[j];
							}
						}
						if (zimu.length < myLetter.length) {
							 for (var h = zimu.length; h<myLetter.length; h++)
							 {
		                            lettersHtml += '<span class="crossed">' + myLetter[h]  + '</span>';
							 }
						}
						lettersHtml += ' ';
						
					} else {
						lettersHtml += letters[i] + ' ';
						cuocount++;
					};
				};
                if (letters.length < myinputLetters.length) {
					 for (var h = letters.length; h<myinputLetters.length; h++)
					 {
                            lettersHtml += '<span class="crossed">' + myinputLetters[h]  + '</span> ';
					 }
				}
				$scope.myletterInfo.push({
					"count": cuocount,
					"sentence": lettersHtml,
					"length": letters.length
				})
				dataServices.saveDataInGlobal("myletterInfo", $scope.myletterInfo);
			};
		});
	}
]);


English.controller('E_getSentence', ['$scope', '$http', 'dataServices',
	function($scope, $http, dataServices) {
		$scope.mysentence = dataServices.getDataInGlobal("myletterInfo");
	}
]);


// .directive('myDialog', function() {
//       return {
//         restrict: 'E',
//         transclude: true,
//         templateUrl: 'my-dialog.html'
//       };
// });