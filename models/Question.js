var keystone = require('keystone');
var Types = keystone.Field.Types;


var Question = new keystone.List('Question');

Question.add({
  title: { type: String },
  answer: { type: String }
});

Question.defaultColumns = 'title, answer';
Question.register();
