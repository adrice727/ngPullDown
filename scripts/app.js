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
    // .state('main.source', {
    //   url: '/main/source',
    //   templateUrl: 'views/source.html',
    //   controller: 'mainCtrl',
    //   animation: {
    //     enter: 'slide-in-left-fade',
    //     leave: 'slide-out-right-fade',
    //     ease: 'sine',
    //     speed:'2000'
    //   }
    // });
 
})

.controller('mainCtrl', function($scope, $state) {

  // $scope.contentSource = 'http://www.washingtonpost.com/world/israel-launches-ground-invasion-of-gaza/2014/07/18/8c751f72-0e41-11e4-8c9a-923ecc0c7d23_story.html?hpid=z2';

  $scope.sourceHidden = true;
  $scope.buttonText = 'View Source';
  $scope.articleClass = 'article';

  $scope.showSource = function() {
    $scope.sourceHidden = !$scope.sourceHidden;
    $scope.articleClass = $scope.sourceHidden ? 'greyout' : '';
    $scope.buttonText = $scope.sourceHidden ? 'View Source' : 'Hide Source';
    return $scope.sourceHidden;
  };

  $scope.updateButton = function() {
    return $scope.buttonText;
  };

  // $scope.viewSource = function() {
  //   if ( $scope.sourceHidden === true ) {
  //     $scope.sourceHidden = false;
  //     $state.go('main.source');
  //     $scope.viewOrHide = 'Hide Source'
  //   } else {
  //     $state.go('main');
  //     $scope.sourceHidden = true;
  //     $scope.viewOrHide = 'View Source';
  //   }
  // }

  // $scope.showOrHideSource = function(){
  //   console.log('here', $scope.viewOrHide);
  //   console.log('function called');
  //   if ( $scope.sourceHidden === true ) {
  //     $state.go('main.source');
  //     $scope.sourceHidden = false;
  //   } else {
  //     $scope.sourceHiden = false;
  //   }


  // };

});