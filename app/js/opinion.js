app = angular.module('orionApp.opinion', ['ui.router']);

app.controller('ColumnsCtrl', function($scope, stories) {
	stories.get(8, function(result) {
		$scope.stories = result; 
	});
}); 
	

app.controller('OpinionCtrl', function($scope, stories, $state) {
  $scope.subsections = [
    {
      link: 'blogs',
      name: 'BLOGS'
    },
    {
      link: '.columns',
      name: 'COLUMNS'
    },
    {
      link: 'comicStrip',
      name: 'COMIC STRIP'
    },
    {
      link: 'editiorialIllustration',
      name: 'EDITORIAL ILLUSTRATION'
    },
    {
      link: 'Editorials',
      name: 'EDITORIALS'
    },
    {
      link: 'tweetTalks',
      name: 'TWEET TALKS'
    }
  ];
});
