const attendanceModel = require("../models/mongoModels/attendance");
const studentModel = require("../models/mongoModels/students");
const feeDetails = require("../models/mongoModels/fee");
const userService = require("../app/services/userService");
const ResultValidator = require("../utils/validators/resultValidator");
const { ResponseMessages, Statuses } = require("../constants/constants");

class UserController {
  static async getOneStudentAttendance(req, res) {
    let { roll_num, start_date, end_date } = req.body;
    try {
      const response = await userService.getOneStudentsAttendance(
        roll_num,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({ message: ResponseMessages.success, body: response })
        : res.json({ message: ResponseMessages.invalid });
    } catch (error) {
      res.send(ResponseMessages.error);
    }
  }

  static async getClassAttendance(req, res) {
    let { std_grade, start_date, end_date } = req.body;
    try {
      const response = await userService.getStudentAttByClass(std_grade,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({ message: ResponseMessages.success, body: response })
        : res.json({ message: ResponseMessages.invalid });
    } catch (error) {
    res.send(ResponseMessages.error);
    }
  }
       

  static async getOneStudentFeeReport(req, res) {
    let { roll_num, start_date, end_date } = req.body;
    try {
      const response = await userService.getOneStudentFeeReport(roll_num, start_date, end_date);
      const validation = ResultValidator(response);
      validation
        ? res.json({ message: ResponseMessages.success, body: response })
        : res.json({ message: ResponseMessages.invalid });
    } catch (error) {
    res.send(ResponseMessages.error);
    }
    
  }
  static async getWholeClassFeeReport(req, res) {
    let { std_grade, start_date, end_date } = req.body;
    try {
      const response = await userService.getWholeClassFeeReport(std_grade, start_date, end_date);
      const validation = ResultValidator(response);
      validation
        ? res.json({ message: ResponseMessages.success, body: response })
        : res.json({ message: ResponseMessages.invalid });
    } catch (error) {
    res.send(ResponseMessages.error);
    }
    
  }
}

module.exports = UserController;
