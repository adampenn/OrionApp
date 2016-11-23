app = angular.module('orionApp.multimedia', ['ui.router']);

app.controller('photoGalleriesCtrl', function($scope, stories) {
	stories.get(231, function(result) {
	$scope.stories = result; 
	});
}); 

app.controller('printEditionCtrl', function($scope, stories) {
	stories.get(101, function(result) {
	$scope.stories = result; 
	}); 
}); 

app.controller('VideoCtrl', function($scope, stories) {
	stories.get(14, function(result) {
		$scope.stories = result;
	}); 
});

app.controller('SpecialSectionCtrl', function($scope, stories) {
	stories.get(100, function(result) {
		$scope.stories = result;
	}); 
});

app.controller('MultimediaCtrl', function($scope, stories, $state) {
  $scope.subsections = [
    {
      link: '.photoGalleries',
      name: 'PHOTO GALLERIES'
    },
	  {
      link: '.printEdition',
      name: 'PRINT EDITION'
    },
	  {
      link: '.specialSection',
      name: 'SPECIAL SECTION'
    },
	 	{
      link: '.video',
      name: 'VIDEO'
    }


    ];
});
