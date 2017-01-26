var keystone = require('keystone');
var Types    = keystone.Field.Types;


var Answer = new keystone.List('Answer');

Answer.add({
  title: { type: String  },
  question: { type: Types.Relationship, ref: 'Question' }
});

Answer.defaultColumns = 'title, question';
Answer.register();
