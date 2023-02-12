const Admin = require("../../models/mongoModel/admins");
const logger=require("../../utils/logger")
class AdminRepository {
  static async adminLogin(email, password) {
  try {
  const result = await Admin.find({ email, password });
  logger.info(`Retrieved admin details with email ${email}`);
  return result[0];
  } catch (error) {
  logger.error(`Error retrieving admin details with email ${email} - ${error}`);
  throw error;
  }
  }
  }
  
  module.exports = AdminRepository;