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
      controller: 'CrimeCtrl',
      templateUrl: 'views/story.html'
    })
    .state('news.policeBlotter', {
      url: '/policeBlotter',
      controller: 'PolBloCtrl',
      templateUrl: 'views/story.html'
    })
    .state('opinion', {
      url: '/opinion',
      controller: 'OpinionCtrl',
      templateUrl: 'views/section_nav.html'
    })
    .state('opinion.all', {
      url: '/all',
      controller: 'OpinionCtrl',
      templateUrl: 'views/story.html'
    })
    .state('opinion.columns', {
      url: '/columns',
      controller: 'ColumnsCtrl',
      templateUrl: 'views/story.html'
    })
     .state('opinion.blog', {
      url: '/blog',
      controller: 'BlogsCtrl',
      templateUrl: 'views/story.html'
    })
     .state('opinion.comic', {
      url: '/comic',
      controller: 'ComicCtrl',
      templateUrl: 'views/story.html'
    })
     .state('opinion.editorial', {
      url: '/illistration',
      controller: 'EditorCtrl',
      templateUrl: 'views/story.html'
    })
    .state('opinion.editorials', {
      url: '/editorials',
      controller: 'EditorialCtrl',
      templateUrl: 'views/story.html'
    })
	.state('opinion.tweetTalks', { 
		url: '/tweetTalks', 
		controller: 'TweetCtrl', 
		templateUrl: 'views/story.html'
	})
   .state('ae', {
      url: '/ae',
      controller: 'AeCtrl',
      templateUrl: 'views/section_nav.html'
    })
   .state('ae.all', {
      url: '/all',
      controller: 'AeCtrl',
      templateUrl: 'views/story.html'
    })
	.state('ae.previews', { 
	  url: '/previews', 
	  controller: 'AePreviews',	
	  templateUrl: 'views/story.html'
	})
	.state('ae.humans', { 
	  url: '/humans', 
	  controller: 'AeHumans', 
	  templateUrl: 'views/story.html'
	})
	.state('ae.quandas', { 
		url: '/qandas', 
		controller: 'AeQA', 
		templateUrl: 'views/story.html'
	})
	.state('ae.reviews', {
		url:'/reviews', 
		controller: 'AeReviews', 
		templateUrl: 'views/story.html'
	})
	.state('ae.nebula', { 
		url:'/nebula', 
		controller: 'AeNebula', 
		templateUrl: 'view/story.html'
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
	.state('multimedia.all', {
		url: '/all', 
		controller: 'MultimediaCtrl',	
		templateUrl: 'views/story.html'
	})
	.state('multimedia.photoGalleries', { 
		url: '/photoGalleries', 
		controller: 'photoGalleriesCtrl',
		templateUrl: 'views/story.html'
	})
	.state('multimedia.printEdition', {
		url: '/printEdition', 
		controller: 'printEditionCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('multimedia.video', { 
		url: '/video', 
		controller: 'VideoCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('about', {
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl: 'views/section_nav.html'
    })
	.state('about.archives', {
		url: '/archives', 
		controller: 'ArchivesCtrl', 
		templateUrl: 'views/story.html'
	})
  	.state('sports', {
		url: '/sports', 
		controller: 'SportsCtrl', 
		templateUrl: 'views/section_nav.html'
  	}) 
  	.state('sports.all', {
		url: '/all', 
		controller: 'SportsCtrl', 
		templateUrl: 'views/story.html'
  	}) 
	.state('sports.volleyball', { 
		url: '/volleyball', 
		controller: 'VolleyballCtrl', 
		templateUrl: 'views/story.html'
	})
  	.state('sports.baseball', {
  		url: '/baseball', 
  		controller: 'BaseballCtrl', 
  		templateUrl: 'views/story.html'
  	})   
	.state('sports.golf', { 
		url:'/golf', 
		controller: 'GolfCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('sports.softball', {
		url: '/softball', 
		controller: 'SoftballCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('sports.crossCountry', { 
		url: '/crossCountry', 
		controller: 'XCountryCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('sports.trackAndField', { 

		url: '/trackAndField', 
		controller: 'TrackCtrl', 
		templateUrl: 'views/story.html'
	})
	.state('sports.basketball', { 
		url: '/basketball', 
		controller: 'BasketballCtrl', 
		templateUrl: 'views/story.html'
	}) 
	.state('sports.soccer', { 
		url: '/soccer', 
		controller: 'SoccerCtrl', 
		templateUrl: 'views/story.html'
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
      link: 'opinion.all',
      name: 'OPINION'
    },
    {
      link: 'sports.all',
      name: 'SPORTS'
    },
    {
      link: 'ae.all',
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

app.service('stories', function($http) {
  this.get = function (id, callback) {
    $http({
      method: 'GET',
      url: 'http://theorion.com/wp-json/wp/v2/posts?categories='+id+'&filter[posts_per_page]=12'
    })
    .then(function successCallback(response) {
      var stories = angular.fromJson(response.data); 
      for(i=0; i < stories.length; i++) {
        (function (stories, i) {
          stories[i].date = new Date(Date.parse(stories[i].date)).toDateString();
          pos = stories[i].excerpt.rendered.indexOf('class="pvc_stats "') - 31;
          stories[i].excerpt.rendered = stories[i].excerpt.rendered.substring(0,pos);
          if(stories[i]._links['wp:featuredmedia']) {
            var imageJSON = stories[i]._links['wp:featuredmedia']['0']['href']; 
            $http({
              method: 'GET', 
              url: imageJSON
             })
            .then(function successCallback(response) {
              stories[i].featuredImage = response.data.source_url;
              callback(stories);
            });
          } else {
            stories[i].featuredImage = null;
	  }
        })(stories,i);
      }
    });
  }
});

app.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
