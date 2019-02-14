const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    id:{
      type:Number
    },
    name: {
      type: String
    },
    email:{
      type:String
    },
    credits : {
      type: Number
    }
  },{
      collection: 'Users'
  });
module.exports = mongoose.model('Note', NoteSchema);
