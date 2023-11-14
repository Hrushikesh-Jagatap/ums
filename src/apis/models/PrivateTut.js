const mongoose = require('mongoose');
const privateTuitionSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: null
  },
  subject: {
    type: String,
    // required: true,
    default: null
  },
  grade: {
    type: String,
    // required: true,
    default: null
  },
  targetExam: {
    type: String,
    // required: true,
    default: null
  },
  priceLimit: {
    type: Number,
    // required: true,
    default: null
  },
});
const PrivateTuition = mongoose.model('PrivateTuition', privateTuitionSchema);
