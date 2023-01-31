const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    roll_number: {
        type: String,
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
    others: String,
    doa: {
        type: String,
        required: true,
    },
    dob: { type: String, required: true },
    class: {
        type: String,
        required: true,
    },
    basic_fee: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Student', StudentSchema)