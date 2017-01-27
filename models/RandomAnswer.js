var keystone = require('keystone')
var Types    = keystone.Field.Types;


var RandomAnswer = new keystone.List('RandomAnswer');

RandomAnswer.add({
  text: { type: String }
})

RandomAnswer.defaultColumns = 'text';
RandomAnswer.register();
