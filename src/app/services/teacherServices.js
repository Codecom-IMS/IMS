const TeacherRepository = require("../repositories/teacherRepositories");
const TeacherFactory = require("../factories/teacherFactories");
class TeacherServices {
  static async teacherLogin(email, password) {
    try {
      const result = await TeacherRepository.teacherLogin(email, password);
      const data = await TeacherFactory.teacherLogin(result);
      console.log(data)
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TeacherServices;
