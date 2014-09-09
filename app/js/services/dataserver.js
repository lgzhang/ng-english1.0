angular.module('DataServices', [])
	.factory('dataServices', function($http) {
		var serviceInstance = {};
		var getData = function(id) {
			return $http({
				method: 'JSONP',
				url: 'http://192.168.111.23:8080?id=' + id + '&callback=JSON_CALLBACK'
			});
		}

		var saveDataInGlobal = function(id, data) {
			serviceInstance[id] = data;
		}

		var getDataInGlobal = function(id) {
			return serviceInstance[id];
		}

		var deleteDataInGlobal = function(id) {
			if (serviceInstance.hasOwnProperty(id)) delete serviceInstance[id];
		}

		return {
			getData: getData,
			saveDataInGlobal: saveDataInGlobal,
			getDataInGlobal: getDataInGlobal,
			deleteDataInGlobal: deleteDataInGlobal
		};
	})