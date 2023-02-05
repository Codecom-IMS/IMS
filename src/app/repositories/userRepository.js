const dateCheck = require("../../utils/dateCheck");
const studentModel = require("../../models/mongoModels/students")
const attendanceModel = require("../../models/mongoModels/attendance")
const feeModel = require("../../models/mongoModels/fee");

class userRepository {
  static async getStudentByRollnum(roll_num) {
    try {
      const student = await studentModel.find({ roll_number: roll_num });
      return student[0];
    } catch (err) {
      throw err;
    }
  }
  static async getStudentAttByClass(std_grade, start_date, end_date) {
    try {
      const new_start_date = await dateCheck(start_date, end_date);
      const studentFromAttendance = await attendanceModel.find({
        class: std_grade,
        date: {
          $gte: new_start_date,
          $lte: end_date,
        },
      });
      return studentFromAttendance;
    } catch (err) {
      throw err;
    }
  }
  static async getStudentFeeByRollnum(roll_num){
    try {
        const studentFromFee = await feeModel.find({ student_id: roll_num });
        return studentFromFee;
    } catch (error) {
        throw error;
    }

  }
  static async getStudentFeeByClass(std_grade){
    try {
        const studentFromFee = await feeModel.find({ class: std_grade });
        return studentFromFee;
    } catch (error) {
        throw error;
    }
  }
}

module.exports = userRepository;