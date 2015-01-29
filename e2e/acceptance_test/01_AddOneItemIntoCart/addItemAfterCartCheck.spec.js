/**
 * シナリオ(ログインして...)
 * 
 * ログイン画面でログインをした後、自分がログインできたかをログイン者名をみて確認する。
 */
'use strict';

describe('シナリオ１', function() {
  var page={};

  beforeEach(function() {
    browser.get('/orderlist/index.HTML');
    page.cart = require('../../components/cart/cart.po');
    page.home = require('../../components/home/home.po');
  });

  it('カートに2つ商品を入れた後、１つ削除して、カートの中身が１つになっている事を確認', function(done) {
    // 商品を2つ追加しておく
    page.home.addCart('0').then(function(){
      return page.home.addCart('1');
    }).then(function(){
      // カードを見る
      return page.home.moveCartView();
    }).then(function(){
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
