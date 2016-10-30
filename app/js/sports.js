app = angular.module('orionApp.sports', []);


app.controller('BaseballCtrl', function($scope, stories) {
  stories.get(1955, function(result) {
    $scope.stories = result;  
  });
});

app.controller('SportsCtrl', function($scope, $http) {
  stories.get(1955, function(result) {
    $scope.stories = result;  
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
});
