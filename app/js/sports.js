app = angular.module('orionApp.sports', []);


app.controller('BaseballCtrl', function($scope, stories) {
	$http({
		method: 'GET',
		url: 'http://theorion.com/wp-json/wp/v2/posts?categories=1955&filter[posts_per_page]=12&filter[offset]=12'
	})
	.then(function successCallback(response) {
		$scope.stories = response.data; 
	});
  });

app.controller('SportsCtrl', function($scope, $http) {
  $http({
    method: 'GET', 
    url:'http://theorion.com/wp-json/wp/v2/posts?categories=13&filter[posts_per_page]=12&filter[offset]=12'
  })
  .then(function successCallback(response)
  {
    var stories = angular.fromJson(response.data); 
    for(i=0; i < stories.length; i++) {
      (function (stories, i) {
        if(stories[i]._links['wp:featuredmedia']) {
          var imageJSON = stories[i]._links['wp:featuredmedia']['0']['href']; 
          $http({
            method: 'GET', 
            url: imageJSON
           })
          .then(function successCallback(response) {
            stories[i].featruedImage= response.data.source_url;
            console.log(stories);
	    $scope.stories = stories;
          });
        }
      })(stories,i);
    }
  });
  $scope.subsections = [
    {
      link: 'baseball',
      name: 'BASEBALL'
    },
    {
      link: 'basketball',
      name: 'BASKETBALL'
    },
	  {
      link: 'crossCountry',
      name: 'CROSS COUNTRY'
    },
	  {
      link: 'golf',
      name: 'GOLF'
    },
	  {
      link: 'soccer',
      name: 'SOCCER'
    },
	  {
      link: 'softball',
      name: 'SOFTBALL'
    },	
	  {
      link: 'trackAndField',
      name: 'TRACK AND FIELD'
    },
	  {
      link: 'volleyball',
      name: 'VOLLEYBALL'
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
