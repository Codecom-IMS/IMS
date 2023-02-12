const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
  roll_number: {
    type: Number,
    required: true,
  },
  student_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  father_cnic: {
    type: String,
    required: true,
  },
  others: {
    type: Number,
    required: true,
  },
  date_of_admission: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  basic_fee: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fee_status: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Students", studentModel);
