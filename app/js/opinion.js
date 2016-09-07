app = angular.module('orionApp.opinion', []);

app.controller('OpinionCtrl', function($scope) {
			$scope.titles = [
				"Cameras are nice, but action matters", 
				"Go-ing Outside", 
				"Millennials find it harder to Adult", 
				"Don't settle for monogamy", 		
			] 
			$scope.summary = [ 
				"The Chico Police Department has begun the installation of cameras on a popular walking path near campus that were proposed in February.", 
				"Video games might have a bad reputation for creating couch potatoes, but one app has proved that gamers will even walk outside if it means leveling up", 
				"Last week I failed to be an adult in several ways. On Tuesday I spent all day in my pajamas and watched the entire season of Stranger Things", 
				"Last weekend, my friend and I were having our morning coffee at Starbucks and started discussing the animosity we had towards those who frown upon casual dating.", 
			]
}); 
