/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

// カート内ページ
var CartPage = function() {

  // repeater
  var cartItem = '(productId, item) in cartItems';
  // エレメント
  this.cartItemRowsEl = element.all(by.repeater(cartItem));
  this.cartItemEl = element(by.repeater(cartItem));
  this.clearBtnEl = element(by.css('.cart-clear'));
  this.buyBtnEl   = element(by.css('.cart-buy'));

  /**
   * ユースケース(カート内商品の削除)
   * カート内指定行の商品を削除する。
   *
   * @param  {Number}   cartRowNo  - 削除するカートの列番号
   * @return {Promise}
   */
  this.removeCart = function(cartRowNo){
    var cartBtn = element(by.repeater(cartItem).row(cartRowNo))
      .element(by.css('.cart-remove'));
    return browser.wait(function(){
      return cartBtn.isPresent();
    }, 10000, 'about remove cart').then(function(){
      return cartBtn.click();
    });
  };
};

module.exports = new CartPage();
