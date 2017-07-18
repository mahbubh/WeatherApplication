(function(angular) {
  'use strict';
	app.directive('weatherDetails',function(){
		return {
			
			 templateUrl: 'assets/partials/_weather-panel-light.html',
			 restrict: "A",
			 scope: {
				useDayForecast: '=showEntry'
				
			  },
			 link: function(scope, element, attrs) {
				scope.getIconImageUrl = function(iconName) {
				  return (iconName ? 'https://www.metaweather.com/static/img/weather/ico/' + iconName + '.ico' : '');
				};
				
			  }
		}
	});
	
	app.directive('bars', function ($parse) {
      return {
         restrict: 'E',
         replace: true,
         template: '<div id="chart"></div>',
         link: function (scope, element, attrs) {
           var data = attrs.data.split(','),
           chart = d3.select('#chart')
             .append("div").attr("class", "chart")
             .selectAll('div')
             .data(data).enter()
             .append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + " C"; });
         } 
      };
   });
})(window.angular);