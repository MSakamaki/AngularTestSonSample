/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

// ログインページ
var LoginPage = function() {

  // エレメント
  this.loginBtnEl = element(by.buttonText('Login'));
  this.inputName = element(by.name('username'));
  this.inputPass = element(by.name('password'));

  /**
   * ユースケース(ログイン)
   * ユーザーのログイン操作を行った後、Promiseを返却。
   *
   * @param  {String}   user     - ログインユーザー
   * @param  {String}   password - ログインユーザーパスワード
   * @return {Promise}
   */
  this.login = function(user, password){
    var home = require('../../components/home/home.po');

    this.inputName.sendKeys(user);
    this.inputPass.sendKeys(password);
    this.loginBtnEl.click();
    
    return browser.wait(function(){
      return home.loginTitle.isPresent();
    }, 10000, 'about login');
  };
};

module.exports = new LoginPage();
