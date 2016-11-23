app = angular.module('orionApp.opinion', ['ui.router']);

app.controller('ColumnsCtrl', function($scope, stories) {
	stories.get(103, function(result) {
		$scope.stories = result; 
	});
}); 
	
app.controller('BlogsCtrl', function($scope, stories) {
	stories.get(102, function(result) {
		$scope.stories = result; 
	}); 
}); 

app.controller('EditorialCtrl', function($scope, stories) {
	stories.get(7320, function(result) { 
		$scope.stories = result; 
	});
});

app.controller('EditorCtrl', function($scope, stories) {
	stories.get(98, function(result) { 
		$scope.stories = result; 
	}); 
}); 

app.controller('ComicCtrl', function($scope, stories) {
	stories.get(5851, function(result) {
		$scope.stories = result; 
	}); 
});

app.controller('TweetCtrl', function($scope, stories) {
	stories.get(5720, function(result) {
		$scope.stories = result; 
	}); 
});

app.controller('OpinionCtrl', function($scope, stories, $state) {
  $scope.subsections = [
    {
      link: '.blog',
      name: 'BLOGS'
    },
    {
      link: '.columns',
      name: 'COLUMNS'
    },
    {
      link: '.comic',
      name: 'COMIC STRIP'
    },
    {
      link: '.editorials',
      name: 'EDITORIAL ILLUSTRATION'
    },
    {
      link: '.editorial',
      name: 'EDITORIALS'
    },
    {
      link: '.tweetTalks',
      name: 'TWEET TALKS'
    }
  ];
});
