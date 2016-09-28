app = angular.module('orionApp.sports', []);

app.controller('SportsCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://theorion.com/wp-json/wp/v2/posts?categories=13&filter[posts_per_page]=12&filter[offset]=12'
  })
  .then(function successCallback(response) {
    var stories = response.data;
    for (i=0; i < stories.length; i++) {
      var imageJSON = stories[i]._links['wp:featuredmedia']['0']['href'];
      $http({
        method: 'GET',
        url: imageJSON
      })
      .then(function successCallback(response) {
        console.log(stories[i]);
        //$scope.stories[i].push({"featuredPhoto":response.data.source_url});
        //console.log($scope.stories[i]);
      });
    }
  });
});
