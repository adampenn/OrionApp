app = angular.module('orionApp.calendar', []);
app.controller('CalendarCtrl', function($scope) {
  $scope.subsection;
  $scope.subsections = [
    {
      link: 'feature1',
      name: 'FEATURE1'
    }
    ];
});
