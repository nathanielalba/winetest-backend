var keystone = require('keystone')
var Types    = keystone.Field.Types;


var WrongAnswer = new keystone.List('WrongAnswer');

WrongAnswer.add({
  text: { type: String },
  question: { type: Types.Relationship, ref: 'Question' }
})

WrongAnswer.defaultColumns = 'text';
WrongAnswer.register();
