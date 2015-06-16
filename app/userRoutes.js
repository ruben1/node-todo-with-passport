

module.exports = function(app) {

  app.get('/api/currentUser', function(req, res) {
    console.log('authenticated user', req.user);
    res.json(req.user);
  });
};
