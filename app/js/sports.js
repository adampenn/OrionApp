app = angular.module('orionApp.sports', []);


app.controller('BaseballCtrl', function($scope, stories) {
  stories.get(1955, function(result) {
    $scope.stories = result;  
  });
});

app.controller('GolfCtrl', function($scope, stories) {
	stories.get(1957, function(result) {
		$scope.stories = result;
	}); 
});
app.controller('SoftballCtrl', function($scope, stories) {
	stories.get(573, function(result) {
	$scope.stories = result;
	}); 
});

app.controller('TrackCtrl', function($scope, stories) {
	stories.get(1956, function(result) {
	$scope.stories = result; 
	}); 
}); 

app.controller('BasketballCtrl', function($scope, stories) {
	stories.get(1953, function(result) {
	$scope.stories = result; 
	}); 
}); 

app.controller('SoccerCtrl', function($scope, stories) {
	stories.get(5383, function(result) {
		$scope.stores = result; 
	}); 
});

app.controller('XCountryCtrl', function($scope, stories) {
	stories.get(5385, function(result) {
		$scope.stories = result; 
	}); 
});

app.controller('VolleyballCtrl', function($scope, stories) {
	stories.get(5384, function(result) {
		$scope.stories = result; 
	}); 
});

app.controller('SportsCtrl', function($scope, stories) {
	
    $scope.subsections = [
    {
      link: '.baseball',
      name: 'BASEBALL'
    },
    {
      link: '.basketball',
      name: 'BASKETBALL'
    },
	  {
      link: '.crossCountry',
      name: 'CROSS COUNTRY'
    },
	  {
      link: '.golf',
      name: 'GOLF'
    },
	  {
      link: '.soccer',
      name: 'SOCCER'
    },
	  {
      link: '.softball',
      name: 'SOFTBALL'
    },	
	  {
      link: '.trackAndField',
      name: 'TRACK AND FIELD'
    },
	  {
      link: '.volleyball',
      name: 'VOLLEYBALL'
    }
  ];
});
