'use strict';

angular.module('AngularJsTestson')
  .controller('NavbarController', ['$scope','Auth','$location',
      function ($scope, Auth, $location) {
    $scope.menu = [{
      'title': 'ホーム',
      'link': 'main.app.home'
    }];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };
  }]);
