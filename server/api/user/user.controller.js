'use strict';

var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.status(422).json(err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  res.status(200).json([require('../../user/hoge.json')]);
};


/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  res.json(require('../../user/hoge.json'));
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  res.json(require('../../user/hoge.json'));
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
