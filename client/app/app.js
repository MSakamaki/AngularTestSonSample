'use strict';

angular.module('AngularJsTestson.constants', []);
angular.module('AngularJsTestson', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'AngularJsTestson.constants',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($locationProvider) {

    $locationProvider.html5Mode(true);
  });
