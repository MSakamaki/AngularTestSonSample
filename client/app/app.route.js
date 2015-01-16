'use strict';

angular.module('AngularJsTestson')
  .config(['$urlRouterProvider', '$stateProvider',
      function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      .otherwise('/home');

    $stateProvider
      .state('main', {
        abstract: true,
        url: '/#',
        templateUrl: 'app/frame/main.html',
        resolve:{
          mainInitialize: function(){
          }
        }
      })

    // 非認証時
    .state('main.login', {
      url: '^/login',
      views: {
        'header@main': {
          template: ''
        },
        'contents@main': {
          templateUrl: 'app/login/login.html',
          controllerAs: 'login',
          controller: 'LoginController'
        },
        'footer@main': {
          template: ''
        }
      }
    })

    // アプリルート
    .state('main.app', {
      url: '^/',
      abstract: true,
      views: {
        'header@main': {
          templateUrl: 'components/views/navbar/navbar.html'
        },
        'contents@main': {
          template: '<div>old STARK home page!</div>'
        },
          'footer@main': {
            templateUrl: 'components/views/footer/footer.html'
          }
      }
    })

    // ホーム
    .state('main.app.home', {
      url: '^/home',
      views: {
        'contents@main': {
          templateUrl: 'app/home/home.html',
          controllerAs: 'home',
          controller: 'HomeController'
        }
      }
    });
  }]);
