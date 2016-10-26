app = angular.module('orionApp.news', ['ui.router']);

app.controller('BreakingCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://theorion.com/wp-json/wp/v2/posts?categories=1955&filter[posts_per_page]=12'
  })
  .then(function successCallback(response) {
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
            $scope.stories = stories;
          });
        }
      })(stories,i);
    }
  });
});
app.controller('CampusCtrl', function($scope, $http) 
{
	$http({ 
		method: 'GET', 
		url: 'http://theorion.com/wp-json/wp/v2/posts?categories=11139&filter[posts_per_page]=310'
	})
	.then(function successCallback(response){
		$scope.stories = response.data; 
	}); 
});
app.controller('AdministrationCtrl', function($scope, $http)
{
	$http({
			method: 'GET', 
			url: 'http://theorion.com/wp-json/wp/v2/posts?categories=132&filter[posts_per_page]=12'
		})
		.then(function successCallback(response){
			$scope.stories = response.data; 
		}); 
});
app.controller('CommunityCtrl', function($scope, $http) 
{
	$http({ 
		method: 'GET', 
		url: 'http://theorion.com/wp-json/wp/v2/posts?categories=7660&filter[posts_per_page]=310'
	})
	.then(function successCallback(response){
		$scope.stories = response.data; 
	}); 
});

app.controller('NewsCtrl', function($scope, $http, $state) {
  $scope.subsections = [
    {
      link: '.breaking',
      name: 'BREAKING NEWS'
    },
    {
      link: '.campus',
      name: 'CAMPUS'
    },
    {
      link: '.administration',
      name: 'ADMINISTRATION'
    },
    {
      link: '.community',
      name: 'COMMUNITY'
    },
    {
      link: '.crime',
      name: 'CRIME'
    },
    {
      link: '.policeBlotter',
      name: 'POLICE BLOTTER'
    }
  ];
});
