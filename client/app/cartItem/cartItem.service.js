'use strict';

angular.module('AngularJsTestson')
  .factory('cartItem', function () {

    var items = [];

    // Public API here
    return {
      add: function (item) {
        return items.push(item);
      },
      remove: function(item) {
        var index = items.indexOf(item);
        if(index > -1) {
          items.splice(index, 1);
        }
      },
      removeProductId: function(productId) {
        angular.forEach(items, function(v,k){
          if(this.keepGoing) {
            if (v.productId === parseInt(productId)){
              items.splice(k, 1);
              this.keepGoing = false;
            }
          }
        },{keepGoing:true});
      },
      clear: function() {
        items.length = 0;
      },
      items: items
    };
  });
