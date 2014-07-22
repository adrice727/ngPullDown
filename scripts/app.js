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
      controller: 'iFrameCtrl',
    });
 
})

.service('articleSource', function() {
  sourceHidden = true;
  sourceLoaded = false;

  return {

    load: function(){
      sourceLoaded = true;
    },
    isLoaded: function(){
      return sourceLoaded;
    },
    hidden: function(){
      return sourceHidden;
    },
    showOrHide: function(){
      sourceHidden = !sourceHidden;
    }
  }
})

.controller('mainCtrl', function($scope, $state, articleSource) {

  $scope.viewOrHide = 'View Source';
  $scope.sourceLoaded = false;
  $scope.sourceHidden = true;


  setTimeout(function(){ loadSource(); }, 1000);

  var loadSource = function(){
    $state.go('main.source');
    articleSource.load();
    $scope.sourceLoaded = true;
  };

  $scope.showOrHideSource = function() {
    if ( $scope.sourceLoaded ) {
      articleSource.showOrHide()
      $scope.viewOrHide = articleSource.hidden() ? 'View Source' : 'Hide Source';
      $scope.sourceHidden = articleSource.hidden();
    }
  }

  $scope.title = 'Yo';

})

.controller('iFrameCtrl', function($scope, $state, $log, articleSource) {

  $scope.showOrHide = function() {
    return !articleSource.hidden();
  };

})