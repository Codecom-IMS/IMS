const mongoose = require(`mongoose`);

const feeDetails = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  student_name: {
    type: String,
  },
  student_id: {
    type: Number,
    required: true,
  },
  basic_fee: {
    type: Number,
  },
  others: {
    type: Number,
  },
  current_paid_fee: {
    type: Number,
  },
  arrears: {
    type: Number,
  },
  date: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
  },
});
module.exports = mongoose.model(`fee_details`, feeDetails);
