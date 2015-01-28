'use strict';

var _ = require('lodash');

// 登録処理、10秒
exports.create = function(req, res) {
  console.log('purchase create', req.body)
  setTimeout(function(){
    return res.json(201,{ "status": "ok" });
  }, 10000);
};