const mongoose = require("mongoose");

const attendanceModel = new mongoose.Schema({
  att_id: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  att: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("attendances", attendanceModel);
