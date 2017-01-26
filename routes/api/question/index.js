var keystone = require('keystone');
var Question = keystone.list('Question')

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
  Question.model.find().then(function(posts) {
    const response = shuffle(posts);

    res.json(response)
  })
}
