var passport = require('passport');

module.exports = function(app) {
  //app.get('/', passport.authenticate('name-of-strategy', { failureRedirect: '/login' }));
  app.get('/api/auth', passport.authenticate('github', { failureRedirect: '/login' }));

  //app.get('/callback', passport.authenticate('name-of-strategy', { failureRedirect: '/login' }),
    //function(req, res) {
      //res.redirect('/home');
    //});
  app.get('/api/auth/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/home');
    });
};
