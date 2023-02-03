const Userfactory = require("../factories/userFactory");
const UserRepository = require("../repositories/userRepository");
class UserService {
  static async getStudents(className, status) {
    try {
      const result = await UserRepository.getStudents(className, status);
      const students = Userfactory.getRollAndName(result);
      return students;
    } catch (error) {
      throw error;
    }
  }
  static async addNewAttendance(className, status) {
    try {
      const result = await UserRepository.getRollNumbers(className, status);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async generateAttendance(students) {
    try {
      const attendance = Userfactory.generateAttendance(students);
      return attendance;
    } catch (error) {
      throw error;
    }
  }
  static async getTotalAttendance() {
    try {
      const attendance = UserRepository.getTotalAttendance();
      return attendance;
    } catch (error) {
      throw error;
    }
  }
  static async insertAttendance(attendanceDetails) {
    try {
      await UserRepository.insertAttendance(attendanceDetails);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserService;
