const TeacherRepository = require("../repositories/teacherRepositories");
const TeacherFactory = require("../factories/teacherFactories");
const logger=require("../../utils/logger")

class TeacherService {
  static async getAllTeachers(email, password) {
    try {
      const result = await TeacherRepository.getAllTeachers(email, password);
      const data = await TeacherFactory.getAllTeachers(result);
  logger.info(`Teacher Services: ${data}`);

      return data;
    } catch (error) {
  logger.error(`Teacher Services: ${error}`);
      throw error;
    }
  }
}

module.exports = TeacherService;
