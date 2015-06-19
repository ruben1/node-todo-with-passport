

module.exports = function(app) {

  app.get('/api/currentUser', function(req, res) {
    res.json(req.user);
  });
};
