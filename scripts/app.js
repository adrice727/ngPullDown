angular.module('ngPullDown', ['ui.router', 'ngFx'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
  
    .state('main', {
      url: '/main',
      controller: 'mainCtrl',
      views: {
        '': { templateUrl: 'views/main.html'},
        'article@main' : { templateUrl: 'views/article.html'}
      }
    });
 
});