English.config(['$stateProvider', '$urlRouterProvider', 'NavData', 'RouteConfig', function ($stateProvider,   $urlRouterProvider, NavData, RouteConfig) {
	//main nav
	$urlRouterProvider
	    .when('', '/home')
	    .when('/', '/home')
	    .when('/course', '/course')
	    .when('/studio', '/studio')
	    .when('/app', '/app')
	    //.when('/course', '/course')
	var states= "";
	var Nav = NavData[2].items;
	var Route = RouteConfig;

	for(var key in Nav) {
		
	    for(var i in Nav[key].items) {
	    	var tempRoute = {};
	    	var state = Nav[key].state;
		    state = state + ':' +Nav[key].items[i].id;
		    var path = state.replace(/\./g, '/');
		    var lastState = state.match(/(\w+)$/)[0];
		       
		    tempRoute = {
		    	name: state,
		    	url: "/" + lastState,
		    	views: Nav[key].items[i].views,
		    	controller: Nav[key].items[i].controller

		    }
		    Route.push(tempRoute);
		    
		}
	}
	console.log("This is router: ", Route);
		
	angular.forEach(Route, function(states) {
		$stateProvider.state(states.name, states)
	});
}]);