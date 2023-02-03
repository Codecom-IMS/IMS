const UserRepository = require("../repositories/userRepository");
class UserService {
  static async getStudents(className, status) {
    try {
      const result = await UserRepository.getStudents(className, status);
      const students = result.map((document) => [document.roll_number, document.student_name])
      return students;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserService;
