app = angular.module('orionApp.news', ['ui.router']);

app.controller('BreakingCtrl', function($scope, stories) {
  stories.get(1955, function(result) {
    $scope.stories = result;  
  });
});
app.controller('CampusCtrl', function($scope, stories) {
  stories.get(11139, function(result) {
    $scope.stories = result;  
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

app.controller('NewsCtrl', function($scope, stories, $state) {
  stories.get(1955, function(result) {
    $scope.stories = result;  
  });
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
