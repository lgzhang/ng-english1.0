'use strict';
var English = angular.module('English', ['ui.router', 'ui.bootstrap', 
	"com.2fdevs.videogular",
	"com.2fdevs.videogular.plugins.controls",
	"com.2fdevs.videogular.plugins.overlayplay",
	"com.2fdevs.videogular.plugins.buffering",
	"com.2fdevs.videogular.plugins.poster"
	])
	.run(
	  ['$rootScope', '$state', '$stateParams',
	    function ($rootScope,   $state,   $stateParams) {
	    // It's very handy to add references to $state and $stateParams to the $rootScope
	    // so that you can access them from any scope within your applications.For example,
	    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
	    // to active whenever 'contacts.list' or one of its decendents is active.
	    $rootScope.$state = $state;
	    $rootScope.$stateParams = $stateParams;
	    }
	  ]
	)


