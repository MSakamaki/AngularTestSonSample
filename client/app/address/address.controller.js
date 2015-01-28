'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $http, cartItem) {
    $scope.payment = function(){
      var items=[];
      angular.forEach(cartItem.items, function(v,k){
        items.push({
          productId: v.productId,
          quantity: 1
        });
      });
      $http.post('/api/purchases', items)
        .success(function(data){
          alert('決済しました');
        });
    };
  });
