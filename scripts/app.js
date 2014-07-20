angular.module('ngPullDown', ['ui.router', 'ngFx'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  
    .state('main', {
      url: '/',
      controller: 'mainCtrl',
      views: {
        '': { templateUrl: 'views/main.html'},
        'article@main' : { templateUrl: 'views/article.html'}
      }
    })
    .state('main.source', {
      url: '/main/source',
      templateUrl: 'views/source.html',
      controller: 'mainCtrl',
      animation: {
        enter: 'slide-in-left-fade',
        leave: 'slide-out-right-fade',
        ease: 'sine',
        speed:'2000'
      }
    });
 
})

.controller('mainCtrl', function($scope, $state) {

  // $scope.contentSource = 'http://www.washingtonpost.com/world/israel-launches-ground-invasion-of-gaza/2014/07/18/8c751f72-0e41-11e4-8c9a-923ecc0c7d23_story.html?hpid=z2';
  $scope.viewOrHide = 'View Source';
  $scope.sourceLoaded = false;
  $scope.sourceHidden = true;
  $scope.articleClass = '';

  $scope.changeStatus = function() {
    if ( $scope.sourceLoaded ) {
      $scope.sourceHidden = !$scope.sourceHidden;
      $scope.articleClass = $scope.sourceHidden ? 'greyout' : 'greyout'; // Fix me
      $scope.buttonText = $scope.sourceHidden ? 'View Source' : 'Hide Source';
      return $scope.sourceHidden;
    }
  };

  setTimeout(function(){ loadSource(); }, 1000);

  var loadSource = function() {
    $state.go('main.source');
    $scope.sourceLoaded = true;
  };

  $scope.getArticleClass = function() {
    return $scope.articleClass;
  };

});