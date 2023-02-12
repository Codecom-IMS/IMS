const AdminRepository = require("../repositories/adminRepository");
const AdminFactory = require("../factories/adminFactory");
const dateCheck = require("../../utils/dateCheck");
class AdminServices {
  static async getOneStudentsAttendance(roll_num, start_date, end_date) {
    try {
      const student = await AdminRepository.getStudentByRollnum(roll_num);
      const std_grade = await AdminFactory.getStudentGrade(student);
      const studentFromAttendance = await AdminRepository.getStudentAttByClass(
        std_grade,
        start_date,
        end_date
      );
      const attDetails = AdminFactory.getAttDetails(
        studentFromAttendance,
        student,
        roll_num
      );
      return attDetails;
    } catch (err) {
      throw err;
    }
  }
  static async getStudentAttByClass(std_grade, start_date, end_date) {
    try {
      const student = await AdminRepository.getStudentByClass(std_grade);
      const wholeClassStudentsAttendance =
        await AdminRepository.getStudentAttByClass(
          std_grade,
          start_date,
          end_date
        );
      const WholeClassAttDetails = AdminFactory.getWholeClassAttDetails(
        wholeClassStudentsAttendance,
        student
      );
      return WholeClassAttDetails;
    } catch (err) {
      throw err;
    }
  }
  static async getOneStudentFeeReport(roll_num, start_date, end_date) {
    try {
      const new_start_date = await dateCheck(start_date, end_date);
      const student = await AdminRepository.getStudentFeeByRollnum(roll_num);
      const feeDetailByDate = await AdminFactory.getFeeDetailByDate(
        student,
        new_start_date,
        end_date
      );
      return feeDetailByDate;
    } catch (err) {
      throw err;
    }
  }
  static async getWholeClassFeeReport(std_grade, start_date, end_date) {
    try {
      const new_start_date = await dateCheck(start_date, end_date);
      const student = await AdminRepository.getStudentFeeByClass(std_grade);
      const feeDetailByDate = await AdminFactory.getFeeDetailByDate(
        student,
        new_start_date,
        end_date
      );
      return feeDetailByDate;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AdminServices;
