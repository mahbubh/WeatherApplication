'use strict';
app.factory('weatherService', ['$http', '$q', function ($http, $q){
	function getWoeid (city) {
		var deferred = $q.defer();
		$http.get('https://www.metaweather.com/api/location/search/?query=' + city)
			.success(function(data){
				deferred.resolve(data);
				console.log("in service");
				console.log(data);
			})
			.error(function(err){
				console.log('Error retrieving woeid');
				deferred.reject(err);
			});
		return deferred.promise;
	}
	
	function getWeatherDetails (woeid) {
		var deferred = $q.defer();
		$http.get('https://www.metaweather.com/api/location/' + woeid)
			.success(function(data){
				deferred.resolve(data);
				console.log("in getWeatherDetails service");
				console.log(data);
			})
			.error(function(err){
				console.log('Error retrieving woeid');
				deferred.reject(err);
			});
		return deferred.promise;
	}

	return {
		getWoeid: getWoeid,
		getWeatherDetails: getWeatherDetails
	};
}]);