app = angular.module('orionApp.opinion', []);
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
