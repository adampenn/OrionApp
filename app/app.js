app = angular.module('orionApp', [
  'ui.router',
  'orionApp.news',
  'orionApp.opinion',
  'orionApp.ae'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/news');
  $stateProvider
    .state('ae', {
      url: '/ae',
      views: {
        '': {
          templateUrl: 'views/ae.html'
        }
      }
    })
    .state('news', {
      url: '/news',
      views: {
        '': {
          templateUrl: 'views/news.html'
        },
        'breaking@news': {
          templateUrl: 'public/partials/news_breaking.html'
        }
      }
    })
    .state('opinion', {
      url: '/opinion',
      templateUrl: 'views/opinion.html'
    });

});

app.controller('AppCtrl', function($scope) {
});
