var keystone = require('keystone');
var Types    = keystone.Field.Types;


var Answer = new keystone.List('Answer');

Answer.add({
  title: { type: String  }
});

Answer.defaultColumns = 'title, question';
Answer.register();
