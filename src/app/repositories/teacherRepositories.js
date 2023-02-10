const mongoose = require("mongoose");
const Teachers= require("../../models/mongoModel/teachers")
const logger=require("../../utils/logger")
class TeacherRepository {
  static async getAllTeachers(email, password) {
  try {
  const result = await Teachers.find({ email, password });
  logger.info(`Retrieved Teacher details with email ${email}`);
  return result[0];
  } catch (error) {
  logger.error(`Error retrieving Teacher details with email ${email} - ${error}`);
  throw error;
  }
  }
  }
  
  module.exports = TeacherRepository;
