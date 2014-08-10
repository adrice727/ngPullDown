angular.module('ngPullDown', ['ui.router', 'ngFx'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  
    .state('main', {
      url: '/',
      controller: 'mainCtrl',
      views: {
        '': { templateUrl: 'views/main.html'},
        'article@main' : { templateUrl: 'views/article.html'},
        'source@main' : { templateUrl: 'views/source.html'}
      }
    });
 
})

.controller('mainCtrl', function($scope, $sce) {

  $scope.viewOrHide = 'View Source';
  var sourceLoaded = false;
  $scope.showSource= false;
  var sourceUrl = 'http://www.washingtonpost.com/world/israel-launches-ground-invasion-of-gaza/2014/07/18/8c751f72-0e41-11e4-8c9a-923ecc0c7d23_story.html?hpid=z2';

  setTimeout(function(){ setSource(); }, 1000);

  var setSource = function() {
    console.log('getting here');
    $scope.currentSourceUrl = $sce.trustAsResourceUrl(sourceUrl);
    sourceLoaded = true;
  };

  $scope.showOrHideSource = function() {
    console.log('step 1');
    console.log('loaded', sourceLoaded);
    if ( sourceLoaded ) {
      console.log('step 2');
      $scope.showSource = !$scope.showSource;
      $scope.viewOrHide = !$scope.showSource? 'View Source' : 'Hide Source';
    }
  };

});