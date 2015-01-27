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
      clear: function() {
        items.length = 0;
      },
      items: items
    };
  });
