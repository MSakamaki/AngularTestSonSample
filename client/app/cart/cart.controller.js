'use strict';

angular.module('AngularJsTestson')
  .controller('CartCtrl', function ($scope, cartItem) {

    $scope.cartItems = cartItem.items;

    $scope.addCart = function(index) {
      cartItem.add($scope.cartItems[index]);
    };

    $scope.removeCart = function(index) {
      cartItem.remove($scope.cartItems[index]);
    };

    $scope.clearCart = function() {
      cartItem.clear();
    }

  });
