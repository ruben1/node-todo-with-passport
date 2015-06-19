var passport = require('passport');

module.exports = function(app) {
  //app.get('/', passport.authenticate('name-of-strategy', options));
  app.get('/api/auth', passport.authenticate('github', { failureRedirect: '/login' }));

  //app.get('/callback', passport.authenticate('name-of-strategy', options),
    //function(req, res) {
      //res.redirect('/home');
    //});
  app.get('/api/auth/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/home');
    });


  app.get('/api/auth/logout', function(req, res) {
    req.session.destroy(function() {
      res.redirect('/');
    });
  });
};
