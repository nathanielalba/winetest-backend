var keystone = require('keystone');
var Question = keystone.list('Question');
var Answer   = keystone.list('Answer');

exports = module.exports = function(req, res) {
  var newQuestion = new Question.model({
    title: req.body.title,
    answer: req.body.answer
  })

  newQuestion.save(function(err) {
    res.json({
      status: 'created'
    })
  })
}
