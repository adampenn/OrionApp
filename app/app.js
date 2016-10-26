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
  $urlRouterProvider.otherwise('/news/all');
  $stateProvider
    .state('news', {
      url: '/news',
      controller: 'NewsCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('news.all', {
      url: '/all',
      controller:'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.breaking', {
      url: '/breaking',
      controller: 'BreakingCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.campus', {
      url: '/campus',
      controller: 'CampusCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.administration', {
      url: '/administration',
      controller: 'AdministrationCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.community', {
      url: '/comunity',
    	controller: 'CommunityCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.crime', {
      url: '/crime',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.policeBlotter', {
      url: '/policeBlotter',
      controller: 'NewsCtrl',
      templateUrl: 'views/story.html'
    })
    .state('opinion', {
      url: '/opinion',
      controller: 'OpinionCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('opinion.columns', {
      url: '/columns',
      controller: 'ColumnsCtrl',
      templateUrl: 'views/section_nav.html'
    })
     .state('opinion.blog', {
      url: '/blog',
      controller: 'BlogCtrl',
      templateUrl: 'views/section_nav.html'
    })
     .state('opinion.comic', {
      url: '/comic',
      controller: 'ComicCtrl',
      templateUrl: 'views/section_nav.html'
    })
     .state('opinion.illistration', {
      url: '/illistration',
      controller: 'IllistrationCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('opinion.editorials', {
      url: '/editorials',
      controller: 'BlogCtrl',
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
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'views/calendar.html'
    })
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
      link: 'news.all',
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
