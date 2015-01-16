/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

// ホームページ
var homePage = function() {

  // エレメント
  this.loginTitle = element(by.css('.homepage-title'));
  this.logoutBtnEl = element(by.linkText('ログアウト'));
  this.loginUser = element(by.css('.loginuser'));


  /**
   * ユースケース(ログアウト)
   * ログアウト操作を行った後、Promiseを返却。
   *
   * @return {Promise}
   */
  this.logout = function(user, password, callback){
    var login = require('../../components/login/login.po');
    this.logoutBtnEl.click();

    return browser.wait(function(){
      return login.loginBtnEl.isPresent();
    }, 10000, 'about logout');
  };
};

module.exports = new homePage();
