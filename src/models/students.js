const mongoose = require(`mongoose`);

const studentModel = new mongoose.Schema({
  student_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  father_cnic: {
    type: Number,
    required: true,
  },
  roll_number: {
    type: Number,
    required: true,
  },
  basic_fee: {
    type: String,
    required: true,
  },
  others: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  doa: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model(`Students`, studentModel);
