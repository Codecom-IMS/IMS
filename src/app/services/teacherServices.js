const TeacherRepository = require("../repositories/teacherRepositories");
const TeacherFactory = require("../factories/teacherFactories");
class TeacherService {
  static async getAllTeachers(email, password) {
    try {
      const result = await TeacherRepository.getAllTeachers(email, password);
      const data = await TeacherFactory.getAllTeachers(result);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TeacherService;
