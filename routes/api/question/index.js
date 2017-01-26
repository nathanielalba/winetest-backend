var keystone = require('keystone');
var Question = keystone.list('Question')
var Answer   = keystone.list('Answer')

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

exports = module.exports = function(req, res) {
  const a = {};

  Answer.model.find().then((answers) => {

    const tempAnswers = shuffle(answers);

    for (var i = 1; i <= 3; i ++) {
      a[i] = answers[i];
    }

    Question.model.find().then(function(posts) {

      const arr = posts.forEach((post) => {
        let tempArr = {
          title: post.title,
          answer: post.answer,
          falseAnswers: {
            
          }
        }
        return tempArr
      });

      const response = shuffle(arr);

      res.json(response)
    })
  })
}
