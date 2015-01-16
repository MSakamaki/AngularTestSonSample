'use strict';

describe('home', function() {
  var page={};

  beforeEach(function() {
    browser.get('/login');
    page.login = require('../../components/login/login.po');
    page.home = require('../../components/home/home.po');
  });

  it('should login and show home page', function(done) {
    page.login.login('hoge', 'hoge').then(function(){
      expect(page.home.loginTitle.getText()).toBe('Hello AngularJsTestson home');
      done();
    });
  });

  it ('should logout', function(done){
    page.login.login('hoge', 'hoge')
      .then(function(){
        return page.home.logout();
      }).then(function(){
        expect(page.login.loginBtnEl.getText()).toBe('Login');
        done();
      });
  });

  // セッションクリア(ログアウト)
  afterEach(function(done) {
    browser.get('/home').then(function(){
      return browser.getCurrentUrl()
    }).then(function(url){
      if(/\/login$/.test(url)){
        done();
      }else{
        return page.home.logout();
      }
    }).then(function(){
      done();
    });
    
  })
});
