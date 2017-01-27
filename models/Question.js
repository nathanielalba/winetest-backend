var keystone = require('keystone');
var Types = keystone.Field.Types;


var Question = new keystone.List('Question');

Question.add({
  text: { type: String },
  answer: { type: Types.Relationship, ref: 'Answer' },
  wrongAnswers: { type: Types.Relationship, ref: 'WrongAnswer', many: true }
});

Question.defaultColumns = 'title, answer';
Question.register();
