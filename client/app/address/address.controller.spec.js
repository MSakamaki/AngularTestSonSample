'use strict';

describe('Controller: AddressCtrl', function () {

  // load the controller's module
  beforeEach(module('sample2App'));

  var AddressCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddressCtrl = $controller('AddressCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
