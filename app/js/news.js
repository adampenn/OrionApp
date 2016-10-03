app = angular.module('orionApp.news', []);

app.controller('BreakingCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://theorion.com/wp-json/wp/v2/posts?categories=1955&filter[posts_per_page]=12'
  })
  .then(function successCallback(response) {
    $scope.stories = response.data;
  });
});
app.controller('NewsCtrl', function($scope) {
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
