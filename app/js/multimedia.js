app = angular.module('orionApp.multimedia', []);
app.controller('MultimediaCtrl', function($scope) {
  $scope.subsection;
  $scope.subsections = [
    {
      link: 'photoGalleries',
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
