'use strict';

angular.module('AngularJsTestson')
  .config(['$urlRouterProvider', '$stateProvider',
      function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
      .otherwise('/orderlist/index.HTML');

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

    // ホーム(商品一覧)
    .state('main.app.home', {
      url: '^/orderlist/index.HTML',
      views: {
        'contents@main': {
          templateUrl: 'app/home/home.html',
          controllerAs: 'home',
          controller: 'HomeController'
        }
      }
    })

    // カート
    .state('main.app.cart', {
      url: '^/cart/index.HTML',
      views: {
        'contents@main': {
          templateUrl: 'app/cart/cart.html',
          controller: 'CartCtrl'
        }
      }
    })

    // お届け先入力
    .state('main.app.address', {
      url: '^/cart/settlement.HTML',
      views: {
        'contents@main': {
          templateUrl: 'app/address/address.html',
          controller: 'AddressCtrl'
        }
      }
    });
  }]);
