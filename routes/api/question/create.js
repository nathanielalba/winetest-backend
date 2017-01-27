var keystone      = require('keystone');
var Question      = keystone.list('Question');
var Answer        = keystone.list('Answer');
var RandomAnswer  = keystone.list('RandomAnswer');

exports = module.exports = function(req, res) {
  const fake = req.body.fakeAnswers;

  var newQuestion = new Question.model({
    text: req.body.title
  })

  const answer = new Answer.model({
    text: req.body.answer,
    question: newQuestion
  })

  newQuestion.answer = answer

  answer.save((err) => { err ? console.log(err) : console.log('everything was ok') })

  for (var prop in fake) {
    if(fake.hasOwnProperty(prop)) {
      const ra = new RandomAnswer.model({
        text: fake[prop]
      })
      ra.save((err) => { err ? console.log(err) : console.log('random answer saved') })
    }
  }

  newQuestion.save(function(err) {
    res.json({
      status: 'created'
    })
  })
}
