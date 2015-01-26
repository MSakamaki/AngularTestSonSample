'use strict';

angular.module('AngularJsTestson')
  .controller('NavbarController', ['$scope',
    function ($scope) {
    $scope.menu = [{
      'title': 'ホーム',
      'link': 'main.app.home'
    },{
      'title': 'カート',
      'link': 'main.app.cart'
    },{
      'title': 'お届け先入力',
      'link': 'main.app.address'
    }];
  }]);
