const mongoose = require('mongoose');

const feeDetails = new mongoose.Schema({
    id : {
        type: Number,
        required: true
    },
    student_name : {
        type: String
        // required: true
    },
    student_id : {
        type: Number,
        required: true
    },
    basic_fee : {
        type: Number
        // required: true
    },
    others : {
        type: Number
        // required: true
    },
    current_paid_fee : {
        type: Number
        // required: true
    },
    arrears : {
        type: Number
        // required: true
    },
    date : {
        type: String
        // required: true
    },
    
})
module.exports = mongoose.model("Fee_Detail", feeDetails)