const { Statuses, STATUSES } = require("../../constants/constants");
const ResultValidator = require("../../utils/validators/resultValidator");
const UserFactory = require("../factories/userFactory");
const UserRepository = require("../repositories/userRepository");
class UserService {
  static async getStudents(className, status) {
    try {
      const result = await UserRepository.getStudents(className, status);
      const students = UserFactory.getRollAndName(result);
      return students;
    } catch (error) {
      throw error;
    }
  }
  static async getRollNumbers(className, status) {
    try {
      const result = await UserRepository.getRollNumbers(className, status);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async generateAttendance(students, attendance) {
    try {
      const result = UserFactory.generateAttendance(students, attendance);
      return result;
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
  static async editAttendance(details, attendance) {
    try {
      await UserRepository.editAttendance(details, attendance);
    } catch (error) {
      throw error;
    }
  }
  static async getAttendance(className, date) {
    try {
      const result = await UserRepository.getAttendance(className, date);
      const validation = ResultValidator(result);
      if (validation) {
        const response = await UserFactory.getAttendance(result);
        const students = await UserRepository.getStudents(
          className,
          STATUSES.ACTIVE
        );
        const studentsRollAndName = await UserFactory.getRollAndName(students);
        const attendance = await UserFactory.getAttendanceDetails(
          studentsRollAndName,
          response
        );
        return attendance;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserService;
