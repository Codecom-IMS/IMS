const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Teacher',TeacherSchema);