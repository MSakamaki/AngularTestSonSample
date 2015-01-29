'use strict';

describe('Service: cartItem', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var cartItem;
  beforeEach(inject(function (_cartItem_) {
    cartItem = _cartItem_;
  }));

  it('should do something', function () {
    expect(!!cartItem).toBe(true);
  });

});
