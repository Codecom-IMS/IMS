const Attendance = require("../../models/mongoModels/attendance");
const Students = require("../../models/mongoModels/students");
class UserRepository {
  static async getStudents(className, status) {
    try {
      const result = await Students.find({ class: className });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserRepository;
