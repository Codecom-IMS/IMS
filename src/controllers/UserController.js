const Students = require("../models/mongoModels/students");
const Attendance = require("../models/mongoModels/attendance");
const UserService = require("../app/services/userService");
const DateFormat = require("../utils/validators/dateformat");
class UserController {
  static async getAllStudents(req, res) {
    const grade = req.body.class;
    try {
      const response = await UserService.getStudents(grade);
      res.send(response);
    } catch (error) {
      throw error;
    }
  }
  static async addnewAttendance(req, res) {
    const grade = req.body.class;
    const students = await UserService.addNewAttendance(grade);
    const result = await UserService.generateAttendance(students);
    const totalAttendance = await UserService.getTotalAttendance();
    await UserService.insertAttendance({
      att_id: totalAttendance.length + 1,
      date: DateFormat(),
      class: grade,
      att: result,
    });
    res.send("Operation Succesfull")
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
