/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

// ホームページ
var homePage = function() {

  // エレメント
  this.buyBtnEl = element(by.css('.item-buy'));
  this.viewcartBtnEl = element(by.css('.item-viewcart'));


  /**
   * ユースケース(商品の追加)
   * 指定行の商品を追加する。
   *
   * @param  {Number}   itemRowNo  - 追加するカートの列番号
   * @return {Promise}
   */
  this.addCart = function(itemRowNo){
    var cartBtn = element(by.repeater('product in products').row(itemRowNo))
      .element(by.css('.item-add'));
    return browser.wait(function(){
      return cartBtn.isPresent();
    }, 10000, 'about add cart').then(function(){
      return cartBtn.click();
    });
  };

  /**
   * ユースケース(カートを見る)
   * カート画面に移動する
   *
   * @return {Promise}
   */
  this.moveCartView = function(){
    var viewCartBtn = new homePage().viewcartBtnEl;
    var cartPage = require('../../components/cart/cart.po');

    return browser.wait(function(){
      return viewCartBtn.isPresent();
    }).then(function(){
      return viewCartBtn.click();
    }).then(function(){
      return browser.wait(function(){
        return cartPage.buyBtnEl.isPresent();
      });
    });
  };
};

module.exports = new homePage();
