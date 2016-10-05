app = angular.module('orionApp.sports', []);

app.controller('SportsCtrl', function($scope, $http) {
  //baseball

  sections = [{name: "sports", id: 13},
    {name: "baseball", id: 1955},
    {name: "basketball", id: 1953},
    {name: "crosscountry", id: 5385},
    {name: "football", id: 11309},
    {name: "golf", id: 1957},
    {name: "soccer", id: 5358},
    {name: "softball", id: 573},
    {name: "track", id: 1956},
    {name: "volleyball", id: 5384}];


  var URL = 'http://theorion.com/wp-json/wp/v2/posts?categories=' + getNumberForSection("golf") + '&filter[posts_per_page]=12&filter[offset]=0';
  
  $http({
    method: 'GET',
    url: URL
    //+(($scope.pagenumber-1)*12)
  })
  .then(function successCallback(response) {
    $scope.stories = [];
    $scope.stories = angular.fromJson(response.data); 
    $scope.featuredImages = [];
    var stories = response.data;
    console.log(window.location.href);
    for(var i = 0; i < stories.length; i++) {
      (function(stories, i){
        var imageJSON = stories[i]._links['wp:featuredmedia']['0']['href'];
        $http({
          method: 'GET',
          url: imageJSON
        })
        .then(function successCallback(response) {
          $scope.baseball[i].featuredPhoto = response.data.source_url;
        });
      })(stories, i);
    }
  });

  function getNumberForSection(section)
  {
    for (var ii = 0; ii < sections.length; ii++)
    {
      if (sections[ii].name = section)
        return sections[ii].id;
    }
  }
});



app.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
