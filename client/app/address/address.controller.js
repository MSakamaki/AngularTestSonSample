'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $http, $state, cartItem) {
    $scope.payment = function(){
      var items=[];
      angular.forEach(cartItem.items, function(v){
        items.push({
          productId: v.productId,
          quantity: 1
        });
      });
      $http.post('/api/purchases', {
        firstName   : $scope.order.firstName,
        lastName    : $scope.order.lastName,
        tel         : $scope.order.tel,
        address     : $scope.order.address,
        mailaddress : $scope.order.mailaddress,
        purchases   : items
      }).success(function(data){
        window.alert(data.message);
        $state.go('main.app.home');
      });
    };
  });
