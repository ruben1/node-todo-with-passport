var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  username : {type : String, default: ''},
  id: {type: Number},
  avatar: {type: String}
});
