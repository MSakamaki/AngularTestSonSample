'use strict';
describe('home', function() {
  var page={};

  beforeEach(function(done) {
    browser.get('/orderlist/index.HTML');
    page.cart = require('../../components/cart/cart.po');
    page.home = require('../../components/home/home.po');
    // 商品を2つ追加しておく
    page.home.addCart('0').then(function(){
      return page.home.addCart('1');
    }).then(function(){
      done();
    });
  });

  it('カートの商品を1つ削除', function(done) {
    // カードを見る
    page.home.moveCartView().then(function(){
      // カート画面に移動したら１番上の商品を削除する
      return page.cart.removeCart('0');
    }).then(function(){
      // 商品の現在数確認
      return page.cart.cartItemEl.isPresent();
    }).then(function(){
      // カートの現在数確認
      expect(page.cart.cartItemRowsEl.count()).toEqual(1);
      done();
    });
  });
});
