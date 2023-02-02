const attendanceModel = require("../models/mongoModels/attendance");
const studentModel = require("../models/mongoModels/students");
class UserController {
  static async getStudents(req, res) {
    let { roll_num, start_date, end_date } = req.body;
    let searchedStudent = ""
    if(!start_date){
        start_date = end_date
    }
    studentModel.find({ roll_number: roll_num }, (err, student) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        const std_grade = student[0].class
        console.log(student);
        console.log(std_grade);
        console.log(start_date,end_date)
        attendanceModel.find({ class: std_grade,
            date : {$gte : start_date,$lte : end_date} },(err, studentFromAttendance) => {
            if (err) {
              console.log(err);
              throw err;
            } else {
              studentFromAttendance.forEach((obj) =>{
                console.log(obj)
                const newObj = obj.att
                console.log(newObj);
                for(let prop in newObj){
                    console.log(prop)
                    if(prop == roll_num){
                        console.log(prop)
                        // searchedStudent = {key= prop : value= newObj[prop]}
                        // console.log(searchedStudent)
                    }
                }
              })
            }
          }
        );
      }
    });
    // const classStudents = await attendanceModel.find({class : grade})
    // if(roll_num){
    //     classStudents.map((student) => {
    //         if(student.att.key == roll_num) {
    //         searchedStudent = student
    //         }
    //     })
    //     res.status(201).json({ Student: searchedStudent })
    // }
    // res.status(201).json({ Students: classStudents })
  }

  // if(c){
  //     if()
  // }

  // const students = await studentModel.find({
  //     dob: {
  //         $gte: "2000-1-1",
  //         $lt: "2013-9-20"
  //     }
  // })
  // res.status(201).json({ Students: students })

  static feeReport(req, res) {
    // const { month, student} = req.body
    // const feeReport =
    res.send("Fee report generated");
  }
  static attendanceReport(req, res) {
    res.send("Attendance Report generated");
  }
}

module.exports = UserController;
