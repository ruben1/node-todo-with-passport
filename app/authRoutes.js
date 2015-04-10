

module.exports = function(app) {
  app.get('/', passport.authenticate('github', { failureRedirect: '/login' }));


  app.get('/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/home');
    });
};