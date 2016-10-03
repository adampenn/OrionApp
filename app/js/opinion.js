app = angular.module('orionApp.opinion', []);
app.controller('OpinionCtrl', function($scope) {
  $scope.subsection;
  $scope.subsections = [
    {
      link: 'breaking',
      name: 'BREAKING NEWS'
    },
    {
      link: 'campus',
      name: 'CAMPUS'
    },
    {
      link: 'administration',
      name: 'ADMINISTRATION'
    },
    {
      link: 'community',
      name: 'COMMUNITY'
    },
    {
      link: 'crime',
      name: 'CRIME'
    },
    {
      link: 'policeBlotter',
      name: 'POLICE BLOTTER'
    }
  ];
});
