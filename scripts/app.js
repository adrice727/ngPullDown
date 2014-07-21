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
      url: '', 
      templateUrl: 'views/source.html',
      controller: 'mainCtrl',
    });
 
})

.controller('mainCtrl', function($scope, $state, $log) {

  $scope.viewOrHide = 'View Source';
  $scope.sourceLoaded = false;
  $scope.sourceHidden = true;
  $scope.articleClass = 'article';

  $scope.changeStatus = function() {
    if ( $scope.sourceLoaded ) {
      $scope.sourceHidden = !$scope.sourceHidden;
      $scope.articleClass = $scope.sourceHidden ? 'article' : 'greyout';
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