var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (config) {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      var user = require('../../user/hoge.json');
      if (user.email === 'hoge' && 
            password === 'hoge') {
        setTimeout(function() { // ログインには3秒かかる想定
          return done(null, user);
        }, 3000);
      }else{
        return done(null, false, { message: 'This password or email is not registered.' });
      }
    }
  ));
};