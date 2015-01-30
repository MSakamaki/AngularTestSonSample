'use strict';

angular.module('AngularJsTestson')
  .controller('CartCtrl', function ($scope, cartItem) {

    var cartItems = cartItem.items;
    

    var refresh = function(){
      $scope.cartItems = {};
      angular.forEach(cartItems, function(v){
        if ($scope.cartItems[v.productId]){
          $scope.cartItems[v.productId].count++;
        }else{
          $scope.cartItems[v.productId] = {
            productName: v.productName,
            price: v.price,
            count: 1,
            cartObject: v
          };
        }
      });
    };
    refresh();

    $scope.addCart = function(index) {
      cartItem.add($scope.cartItems[index].cartObject);
      refresh();
    };

    $scope.removeCart = function(index) {
      cartItem.removeProductId(index);
      refresh();
    };

    $scope.clearCart = function() {
      cartItem.clear();
      refresh();
    };

  });
