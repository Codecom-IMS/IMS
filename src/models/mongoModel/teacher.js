const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  teacher_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Teachers = mongoose.model("Teachers", TeacherSchema);

module.exports = Teachers;


