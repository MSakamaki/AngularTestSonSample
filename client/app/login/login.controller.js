'use strict';

angular.module('AngularJsTestson')
.controller('LoginController',['Auth', '$state',
    function (Auth, $state) {
  var _this = this;
  this.login = function(){
    Auth.login({
      username: _this.input.username,
      password: _this.input.password
    })
    .then(function(){
      $state.go('main.app.home');
    });
  };

  this.input = {};

  }]);
