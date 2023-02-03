const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  id: {
    type: Number,
    required: true,
 
  },
  admin_name: {
    type: String,
    required: true,
    unique:false,
  },
  email: {
    type: String,
    required: true,
    // unique:true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admins = mongoose.model("Admin", AdminSchema);

module.exports = Admins;
