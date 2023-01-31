const studentModel = require('../models/students')
class UserController {
    static getStudents(req, res){
            const students = studentModel.find({})
            console.log(students);
            res.status(201).json({ Students: students })
    
    }
    static feeReport(req, res){
        res.send("Fee report generated");
    }
    static attendanceReport(req, res){
        res.send("Attendance Report generated");
    }
}

module.exports = UserController