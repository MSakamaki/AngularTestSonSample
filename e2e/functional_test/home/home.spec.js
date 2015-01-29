'use strict';

describe('home (order list)', function() {
  var page={};

  beforeEach(function() {
    browser.get('/orderlist/index.HTML');
    page.home = require('../../components/home/home.po');
  });

  it('カートに商品を1つ追加', function(done) {
    page.home.addCart('1').then(function(){
      expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (1)');
      done();
    });
  });

  it('カートに商品を2つ追加', function(done) {
    page.home.addCart('1').then(function(){
      return page.home.addCart('2');
    }).then(function(){
      expect(page.home.viewcartBtnEl.getText()).toBe('カートを見る (2)');
      done();
    });
  });
});
