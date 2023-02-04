const { getAttendance } = require("../../controllers/userController");
const Attendance = require("../../models/mongoModels/attendance");
const Students = require("../../models/mongoModels/students");
class UserRepository {
  static async getStudents(className, status) {
    try {
      const result = await Students.find({ class: className, status });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getRollNumbers(className, status) {
    try {
      const result = await Students.find(
        { class: className, status },
        { roll_number: 1, _id: 0 }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getTotalAttendance() {
    try {
      const attendance = await Attendance.find({});
      return attendance;
    } catch (error) {
      throw error;
    }
  }
  static async insertAttendance(attendanceDetails) {
    try {
      await Attendance.insertMany(attendanceDetails);
    } catch (error) {
      throw error;
    }
  }
  static async editAttendance(details, attendance) {
    try {
      await Attendance.updateOne(details, { $set: { att: attendance } });
    } catch (error) {
      throw error;
    }
  }
  static async getAttendance(className, date) {
    try {
      const result = await Attendance.find({ class: className, date });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserRepository;
