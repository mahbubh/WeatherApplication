'use strict';
app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
	$scope.place=[];
	$scope.placeDetails = [];
	$scope.fiveDayTemp = [];
	
	function fetchWeatherDetails(woeid){
		weatherService.getWeatherDetails(woeid).then(function(data){
			$scope.placeDetails = data;
			console.log("in fetchWeatherDetails controller");
			console.log($scope.placeDetails);
			//$scope.fiveDayTemp = [data.consolidated_weather[0].the_temp,data.consolidated_weather[1].the_temp,data.consolidated_weather[2].the_temp,data.consolidated_weather[3].the_temp,data.consolidated_weather[4].the_temp];
		});
	}
	function fetchWoeid(city) {
		weatherService.getWoeid(city).then(function(data){
			$scope.place = data;
			console.log("in controller");
			console.log($scope.place[0].title);
			fetchWeatherDetails($scope.place[0].woeid);
		});
	}

	fetchWoeid('london');

	$scope.findWoeid = function(city) {
		$scope.place = "";
		fetchWoeid(city);
	};
}]);
