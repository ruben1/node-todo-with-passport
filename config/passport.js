var passport = require('passport');
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var request = require('request');
var User = require('../app/models/user.js');

module.exports = function() {
  passport.use('github',
    new OAuth2Strategy({
      authorizationURL: 'https://github.com/login/oauth/authorize',
      tokenURL: 'https://github.com/login/oauth/access_token',
      clientID: 'ec69fe2ae7f454ddbe7e',
      clientSecret: '6970532084af96d0e81b1bf8c1bbd2287a4f1981',
      callbackURL: 'http://localhost:8080/api/auth/callback'
    },
    function (accessToken, refreshToken, profile, done) {
      console.log('acces', accessToken, refreshToken, profile, done);
      request({
        method: 'GET',
        uri: 'https://api.github.com/user?access_token=' + accessToken,
        headers: {
          'User-Agent': ''
        }
      }, function (err, res, body) {
        // Extract username and image URL
        body = JSON.parse(body);
        var user = {
          username: body.login,
          id: body.id,
          avatar: body.avatar_url 
        };
        User.findOne({id: user.id}, function(err, userFound) {
          console.log('user found', err, userFound);
          if(!!err || !!userFound) {
            done(err, userFound);
          } else {
            User.create(user, function(err, userCreated) {
              console.log('created user', err, userCreated);
              done(err, userCreated);
            });
          }          
        });      
      });
    }
  ));
};
