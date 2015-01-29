'use strict';

angular.module('AngularJsTestson')
  .controller('NavbarController', ['$scope',
    function ($scope) {
    $scope.menu = [{
      'title': '商品一覧へ戻る',
      'link': 'main.app.home'
    }];
  }]);
