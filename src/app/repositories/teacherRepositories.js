const Teacher = require("../../models/mongoModel/teachers");
class TeacherRepository {
  static async teacherLogin(email, password) {
    try {
      const result = await Teacher.find({ email, password });
      return result[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TeacherRepository;
