app = angular.module('orionApp.sports', []);

app.controller('SportsCtrl', function($scope, $http) {
  $scope.subsections = [
    {
      link: 'baseball',
      name: 'BASEBALL'
    },
    {
      link: 'basketball',
      name: 'BASKETBALL'
    }
  ];

/*  //baseball
  $http({
    method: 'GET',
    url: 'http://theorion.com/wp-json/wp/v2/posts?categories=1955&filter[posts_per_page]=12&filter[offset]=12'
    //+(($scope.pagenumber-1)*12)
  })
  .then(function successCallback(response) {
    $scope.stories = respose.data;
    console.log($scope.stories);
    $scope.baseball = [];
    $scope.baseball = angular.fromJson(response.data); 
    $scope.featuredImages = [];
    var stories = response.data;
    for(i in stories) {
      (function(stories, i){
        var imageJSON = stories[i]._links['wp:featuredmedia']['0']['href'];
        $http({
          method: 'GET',
          url: imageJSON
        })
        .then(function successCallback(response) {
          $scope.baseball[i].push({"featuredPhoto":response.data.source_url});
        });
      })(stories, i);
    }
  });*/
});

app.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
