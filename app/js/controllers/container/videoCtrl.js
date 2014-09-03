'use strict';
English.controller('videoCtrl', function($scope, $sce) {
	 $scope.config = {
            sources: [
                {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                {src: $sce.trustAsResourceUrl("http://www.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
            ],
            theme: {
                url: "styles/themes/default/videogular.css"
            }
        };
        console.log($sce)

});