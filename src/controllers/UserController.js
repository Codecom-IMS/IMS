const Students = require("../models/mongoModels/students");
const Attendance = require("../models/mongoModels/attendance");
const UserService = require("../app/services/userService");
class UserController {
  static async getAllStudents(req, res) {
    const grade = req.body.class;
    try{
      const response = await UserService.getStudents(grade);
      res.send(response)
    }catch(error)
    {
      throw error
    }
  }
  static addnewAttendance(req, res) {
    const grade = req.body.class;
    Students.find(
      { class: grade },
      { roll_number: 1, _id: 0 },
      (err, students) => {
        if (err) {
          console.log(err);
          throw err;
        } else {
          const attendance = students.map((value) => value.roll_number);
          const attendances = ["P", "A"];
          attendance.forEach((id, index) => {
            attendance[index] = [
              id,
              attendances[Math.floor(Math.random() * 2)],
            ];
          });
          const obj = Object.fromEntries(attendance);
          Attendance.find({}, (err, totalAttendance) => {
            if (err) {
              console.log(err);
              throw err;
            } else {
              const dateobj = new Date();

              const day = dateobj.getDate();
              const month = dateobj.getMonth() + 1;
              const year = dateobj.getFullYear();
              const attendanceDetails = {
                att_id: totalAttendance.length + 1,
                date: `${year}-${month}-${day}`,
                class: grade,
                att: attendance,
              };
              Attendance.insertMany(attendanceDetails, (err, students) => {
                if (err) {
                  console.log(err);
                  throw err;
                } else {
                  res.send("Operation Successfull");
                }
              });
            }
          });
        }
      }
    );
  }
  static editAttendance(req, res) {
    const details = {
      class: req.body.class,
      date: req.body.date,
    };
    Students.find({ details }, (err, students) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        const attendance = students.map((value) => value.roll_number);
        const attendances = ["P", "A"];
        attendance.forEach((id, index) => {
          attendance[index] = [id, attendances[Math.floor(Math.random() * 2)]];
        });
        const obj = Object.fromEntries(attendance);
        Attendance.updateOne(
          { details },
          { $set: { att: attendance } },
          (err, result) => {
            if (err) {
              throw err;
            } else {
              res.send("Operation Successfull");
            }
          }
        );
      }
    });
  }
  static getAttendance(req, res) {
    Attendance.find({}, (err, attendance) => {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(attendance);
        res.send(attendance);
      }
    });
  }
}
module.exports = UserController;
