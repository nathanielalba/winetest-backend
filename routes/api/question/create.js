var keystone      = require('keystone');
var Question      = keystone.list('Question');
var Answer        = keystone.list('Answer');
var WrongAnswer   = keystone.list('WrongAnswer');

exports = module.exports = function(req, res) {
  const wrong = req.body.wrongAnswers;

  var newQuestion = new Question.model({
    text: req.body.title
  })

  const answer = new Answer.model({
    text: req.body.answer,
    question: newQuestion
  })

  answer.save((err) => { err ? console.log(err) : console.log('everything was ok') })

  let arr = [];
  for (var prop in wrong) {
    if(wrong.hasOwnProperty(prop)) {
      const wa = new WrongAnswer.model({
        text: wrong[prop],
        question: newQuestion
      })
      console.log('here')
      console.log(wa)

      arr.push(wa)
      wa.save((err) => { err ? console.log(err) : console.log('wrong answer saved') })
    }
  }

  console.log('here is arr')
  console.log(arr)

  newQuestion.answer = answer
  newQuestion.wrongAnswers = arr
  newQuestion.save(function(err) {
    res.json({
      status: 'created'
    })
  })
}
