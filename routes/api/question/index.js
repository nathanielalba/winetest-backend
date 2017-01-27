var keystone      = require('keystone');
var Question      = keystone.list('Question');
var Answer        = keystone.list('Answer');
var RandomAnswer  = keystone.list('RandomAnswer');

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
  Question.model.find().populate('answer').exec((err, post) => {
    if (err) {
      res.json({
        title: 'there was an error',
        error: err
      })
    } else {

      const response = shuffle(post)
      res.json(response)
    }
  })
}
