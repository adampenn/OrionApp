app = angular.module('orionApp.opinion', []);
app.controller('BlogCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://theorion.com/wp-json/wp/v2/posts?categories=102&filter[posts_per_page]=12'
  })
  .then(function successCallback(response) {
    $scope.stories = response.data;
  });
});
app.controller('OpinionCtrl', function($scope) {
  $scope.subsection;
  $scope.subsections = [
    {
      link: 'blogs',
      name: 'BLOGS'
    },
    {
      link: 'columns',
      name: 'COLUMNS'
    },
    {
      link: 'comicStrip',
      name: 'COMIC STRIP'
    },
    {
      link: 'editiorialIllustration',
      name: 'EDITORIAL ILLUSTRATION'
    },
    {
      link: 'Editorials',
      name: 'EDITORIALS'
    },
    {
      link: 'tweetTalks',
      name: 'TWEET TALKS'
    }
  ];
});
