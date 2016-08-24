app = angular.module('orionApp', ['ui-view']);

app.controller('OrionAppController', ['$scope', '$stateProvider', '$urlRouterProvider', function($scope, $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('news');
  $stateProvider
    .state('news', {
      url: '/news'
      templateUrl: 'public/partials/news.html'
    })
    .state('news'
}]);
