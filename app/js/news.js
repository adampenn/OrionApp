app = angular.module('orionApp.news', ['ui.router']);

app.controller('BreakingCtrl', function($scope, stories) {
  stories.get(132, function(result) {
    $scope.stories = result;  
  });
});
app.controller('CampusCtrl', function($scope, stories) {
  stories.get(11139, function(result) {
    $scope.stories = result;  
  });
});
app.controller('AdministrationCtrl', function($scope, stories)
{
  stories.get(5968, function(result) {
    $scope.stories = result;  
  });
});
app.controller('CommunityCtrl', function($scope, $http) 
{
  stories.get(7660, function(result) {
    $scope.stories = result;  
  });

});

app.controller('PolBloCtrl', function($scope, stories)
{
	stories.get(283, function(result) {
		$scope.stories = result; 
	});
});

app.controller('CrimeCtrl', function($scope, stories) 
{
	stories.get(5969, function(result) { 
		$scope.stories = result; 
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
