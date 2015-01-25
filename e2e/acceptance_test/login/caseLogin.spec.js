/**
 * シナリオ(ログインして...)
 * 
 * ログイン画面でログインをした後、自分がログインできたかをログイン者名をみて確認する。
 */
'use strict';

describe('case login', function() {
  var page={};

  beforeEatch(function() {
    browser.get('/login');
    page.login = require('../../components/login/login.po');
    page.home = require('../../components/home/home.po');
  });

  it('ログイン画面でログインをした後、自分がログインできたかをログイン者名をみて確認する。', function(done) {
    page.login.login('hoge', 'hoge').then(function(){
      expect(page.home.loginUser.getText()).toBe('こんにちは John Doe');
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
