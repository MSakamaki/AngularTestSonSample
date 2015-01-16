'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
