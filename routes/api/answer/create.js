var keystone = require('keystone');
var Answer   = keystone.list('Answer');

exports = module.exports = function(req, res) {

  const response = {
    status: 'created'
  }
  res.json(response)
}
