const mongoose = require('mongoose');
const homeTuitionSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default:null
  },
  subject: {
    type: String,
    // required: true,
    default:null
  },
  grade: {
    type: String,
    // required: true,
    default:null
  },
  targetExam: {
    type: String,
    // required: true,
    default:null
  },
  priceLimit: {
    type: Number,
    // required: true,
    default:null
  },
  pinCode: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
});
const HomeTuition = mongoose.model('HomeTuition', homeTuitionSchema);
