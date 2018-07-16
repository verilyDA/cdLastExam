const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  name:{
    type: String,
    required: [true, 'provide a name for the commenter'],
    trim: true,
    minlength: 3,
  },
  stars: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
  },
  desc: {
    type: String,
    required: [true, 'provide a comment'],
    minlength: 3,
  },
  for_rest: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comm', commentSchema);