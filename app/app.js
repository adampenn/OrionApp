app = angular.module('orionApp', [
  'ui.router',
  'orionApp.news',
  'orionApp.opinion',
  'orionApp.ae',
  'orionApp.sports', 
	'orionApp.multimedia', 
	'orionApp.about'
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/news');
  $stateProvider
    .state('news', {
      url: '/news',
      controller: 'NewsCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('news.breaking', {
      url: '/breaking',
      controller: 'BreakingCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.campus', {
      url: '/campus',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.administration', {
      url: '/news/administration',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.community', {
      url: '/news/comunity',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.crime', {
      url: '/news/crime',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.policeBlotter', {
      url: '/news/policeBlotter',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('opinion', {
      url: '/opinion',
      controller: 'OpinionCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('sports', {
      url: '/sports',
      controller: 'SportsCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('ae', {
      url: '/ae',
      controller: 'AeCtrl',
      templateUrl: 'views/section_nav.html'
    })
  /* 	.state('calendar', {
      url: '/calendar',
      controller: 'CalendarCtrl',
      templateUrl: 'views/section_nav.html'
    }) */
    .state('multimedia', {
      url: '/multimedia',
      controller: 'MultimediaCtrl',
      templateUrl: 'views/section_nav.html'
    })
	  .state('about', {
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl: 'views/section_nav.html'
    })
   
    /*(.state('classifieds', {
      url: '/classifieds',
      controller: 'SportsCtrl',
      templateUrl: 'views/section_nav.html'
    })*/
});

app.controller('OrionCtrl', function($scope) {
  $scope.subsection;
  $scope.updateLink = function(link) {
    $scope.subsection = link;
    console.log($scope.subsection);
  };
  $scope.sections = [
    {
      link: 'news',
      name: 'NEWS'
    },
    {
      link: 'opinion',
      name: 'OPINION'
    },
    {
      link: 'sports',
      name: 'SPORTS'
    },
    {
      link: 'ae',
      name: 'A&E'
    },
    {
      link: 'calendar',
      name: 'CALENDAR'
    },
    {
      link: 'multimedia',
      name: 'MULTIMEDIA'
    },
    {
      link: 'about',
      name: 'ABOUT'
    },
    {
      link: 'classifieds',
      name: 'CLASSIFIEDS'
    }
  ];
});
