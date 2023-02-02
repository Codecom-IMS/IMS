const mongoose = require('mongoose');

const studentModel = new mongoose.Schema({
    roll_number : {
        type: Number,
        required: true
    },
    student_name : {
        type: String,
        required: true
    },
    father_name : {
        type: String,
        required: true
    },
    father_cnic : {
        type: String,
        required: true
    },
    basic_fee : {
        type: Number,
        required: true
    },
    others : {
        type: Number,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    doa : {
        type: String,
        required: true
    },
    class : {
        type: Number,
        required: true
    },
    gender : {
        type: String,
        required: true
    }
    
})
module.exports = mongoose.model("Students", studentModel)