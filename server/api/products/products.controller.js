'use strict';

var _ = require('lodash');

// todo json
var products = [{
  "productId": 10,
  "productName": "はじめてのAngularJS(和書)",
  "price": 2000,
  "stock": 10
},{
  "productId": 11,
  "productName": "AngularJSリファレンス 単行本（ソフトカバー）",
  "price": 3500,
  "stock": 10
},{
  "productId": 12,
  "productName": "スコンブ(業務用)",
  "price": 800,
  "stock": 5
},{
  "productId": 13,
  "productName": "味わいカルピス",
  "price": 100,
  "stock": 100
}];

// 商品を とるのに 2秒かかる
exports.index = function(req, res) {
  setTimeout(function(){
    res.json(products);
  },2000);
};