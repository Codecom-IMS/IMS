const AdminRepository = require("../repositories/adminRepositories");
const AdminFactory = require("../factories/adminFactories");
const logger=require("../../utils/logger")

class AdminService {
  static async getAllAdmins(email, password) {
  try {
  const result = await AdminRepository.getAllAdmins(email, password);
  const data = await AdminFactory.getAllAdmins(result);
  logger.info(`AdminService.getAllAdmins: ${data}`);
  return data;
  } catch (error) {
  logger.error(`AdminService.getAllAdmins: ${error}`);
  throw error;
  }
  }
  }
  
  module.exports = AdminService;
