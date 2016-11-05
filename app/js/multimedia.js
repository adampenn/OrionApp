app = angular.module('orionApp.multimedia', ['ui.router']);

app.controller('photoGalleriesCtrl', function($scope, stories) {
	stories.get(231, function(result) {
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
      link: 'printEdition',
      name: 'PRINT EDITION'
    },
	  {
      link: 'specialSection',
      name: 'SPECIAL SECTION'
    },
	 	{
      link: 'video',
      name: 'VIDEO'
    }


    ];
});
