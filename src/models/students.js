const mongoose = require(`mongoose`);

const studentModel = new mongoose.Schema({
  student_name: {
    type: String,
  },
  father_name: {
    type: String,
  },
  father_cnic: {
    type: Number,
  },
  roll_number: {
    type: Number,
  },
  basic_fee: {
    type: String,
  },
  others: {
    type: Number,
  },
  dob: {
    type: String,
  },
  doa: {
    type: String,
  },
  class: {
    type: String,
  },
  gender: {
    type: String,
  },
  fee_status: {
    type: String,
  },
  status: {
    type: String,
  },
});
module.exports = mongoose.model(`Students`, studentModel);
