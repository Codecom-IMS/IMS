const attendanceModel = require("../models/mongoModels/attendance");
const studentModel = require("../models/mongoModels/students");
class UserController {
  static async getOneStudentAttendance(req, res) {
    let { roll_num, start_date, end_date } = req.body;
    let searchedStudent = []
    if(!start_date){
        start_date = end_date
    }
    studentModel.find({ roll_number: roll_num }, (err, student) => {
      if (err) {
        console.log(err);
        throw err;
      } 
      else {
        const newStudent = student[0]
        const std_grade = newStudent.class
        console.log(std_grade);
        attendanceModel.find({ class: std_grade,
            date : {$gte : start_date,$lte : end_date} },
            (err, studentFromAttendance) => {
            if (err){
              console.log(err);
              throw err;
            }
            else{
              studentFromAttendance.forEach((obj) =>{
                const newObj = obj.att
                for(let i=0;i<newObj.length;i++){
                  console.log(newObj[i])
                  if(newObj[i][0]==roll_num){
                    const stdObj = {
                      date : obj.date,
                      student_name :newStudent.student_name,
                      father_name : newStudent.father_name,
                      class : newStudent.class,
                      attendance : newObj[i][1]
                    }
                    searchedStudent.push(stdObj)
                  }
                }
              })
              console.log(searchedStudent);
              res.status(201).send( searchedStudent )
            }
          }
        );
      }
    });
  }
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
  static async getClassAttendance(req, res) {
    let {std_grade, start_date, end_date} = req.body
    let searchedStudent = []
    if(!start_date){
      start_date = end_date
    }
    attendanceModel.find({class : std_grade,
      date : {$gte : start_date,$lte : end_date}},
      (err, studentFromAttendance)=>{
        if(err){
          console.log(err);
          throw err;
        }
        else{
          studentFromAttendance.forEach((obj, index)=>{
            // console.log(obj.att);
            const newObj ={
              date : obj.date,
              class : obj.class,
              att : []
            }
            for(let i=0;i<obj.att.length;i++){
              newObj.att.push(obj.att[i])
            }
            console.log(newObj);
            searchedStudent.push(newObj)
          })
    res.status(201).send(searchedStudent)

        }
    })
  }
}

module.exports = UserController;
