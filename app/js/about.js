app = angular.module('orionApp.about', []);

app.controller('ArchivesCtrl', function($scope, stories) {
	stories.get(1760, function(result) {
		$scope.stories = result; 
	}); 
}); 

app.controller('AboutCtrl', function($scope) {
  $scope.subsection;
  $scope.subsections = [
    {
      link: 'orionAdvertising',
      name: 'ORION ADVERTISING'
    },
	  {
      link: 'doante',
      name: 'DONATE'
    },
	  {
      link: 'staff',
      name: 'STAFF'
    },
	 	{
      link: 'apply',
      name: 'APPLY'
    }, 
		{
      link: 'whereToFindTheOrion',
      name: 'WHERE TO FIND THE ORION'
    }, 
		{
      link: 'contactUs',
      name: 'CONTACT US'
    }, 
		{
      link: '.archives',
      name: 'ARCHIVES'
    }, 
		{
      link: 'stylebook',
      name: 'STYLEBOOK'
    }










    ];
});
