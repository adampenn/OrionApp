app = angular.module('orionApp.ae', []);


app.controller('AeCtrl', function($scope) {
	$scope.subsections;
  $scope.subsections = [
    {
      link: 'photoOfTheDay',
      name: 'PHOTO OF THE DAY'
    },
    {
      link: 'previews',
      name: 'PREVIEWS'
    },
    {
      link: 'humansOfChicoState',
      name: 'HUMANS OF CHICO STATE'
    },
    {
      link: 'qandas',
      name: 'Q&As'
    },
    {
      link: 'reviews',
      name: 'REVIEWS'
    },
    {
      link: 'nebula',
      name: 'NEBULA'
    }
  ];
});
/*
app.controller('AECtrl', function($scope) {
  $scope.stories = [
    {
      headline:"Speculation and intrigue: 'Stranger Things' Season Two",
      byline:"Matthew Manferdi",
      date:"September 5, 2016",
      desc:"On Aug. 31, a short teaser of \"Stranger Things\" season two was uploaded to YouTube. Within a few days the 56 second video racked up nearly three million views. Thousands of comments from \"Stranger Things\" fans flooded the Net...",
      link:"#"
    },
    {

    }
  ];
});
*/
