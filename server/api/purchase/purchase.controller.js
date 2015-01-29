'use strict';

var _ = require('lodash');

// 決済処理、10秒
exports.create = function(req, res) {
  console.log('purchase create', req.body)
  setTimeout(function(){
    return res.json(201,{ "status": "ok", "message":"決済が完了しました。" });
  }, 10000);
};