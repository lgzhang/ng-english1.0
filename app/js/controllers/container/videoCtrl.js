'use strict';
English.controller('videoCtrl',
    function ($scope, $sce) {
       	$scope.currentTime = 0;
		$scope.totalTime = 0;
		$scope.state = null;
		$scope.volume = 1;
		$scope.isCompleted = false;
		$scope.API = null;


		$scope.onPlayerReady = function(API) {
			$scope.API = API;
		};

		$scope.onCompleteVideo = function() {
			$scope.isCompleted = true;
		};

		$scope.onUpdateState = function(state) {
			$scope.state = state;
		};

		$scope.onUpdateTime = function(currentTime, totalTime) {
			$scope.currentTime = currentTime;
			$scope.totalTime = totalTime;
		};

		$scope.onUpdateVolume = function(newVol) {
			$scope.volume = newVol;
		};

		$scope.onUpdateSize = function(width, height) {
			$scope.config.width = width;
			$scope.config.height = height;
		};

		$scope.config = {
			autoHide: false,
			autoHideTime: 3000,
			autoPlay: false,
			sources: [
				{src: $sce.trustAsResourceUrl("video/videogular.mp4"), type: "video/mp4"}
			],
			transclude: true,
			theme: {
				url: "video/themes/videogular.css"
			},
			plugins: {
				poster: {
					url: "images/videogular.png"
				}
			}
		};

		$scope.changeSource = function() {
			$scope.config.sources = [
				{src: $sce.trustAsResourceUrl("assets/videogular.mp4"), type: "video/mp4"}
			];
		};

    }
);