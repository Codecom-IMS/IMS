const TeacherService = require("../app/services/teacherServices");
require("dotenv").config();
const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
  ACCESS_TOKEN_SECRET,
} = require("../constants/constants");
const logger = require("../utils/logger");

exports.teacherLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teachers = await TeacherService.teacherLogin(email, password);
    logger.info("Successfully Teacher Logged In");
    if (teachers.status === API_STATUS_CODES.SUCCESS) {
      res.json({
        data: teachers,
      });
    } else {
      logger.info("Teacher Login Failed");
      res.json({ teachers });
    }
  } catch (error) {
    logger.error(RESPONSE_MESSAGES.INVALID);
    res.send(RESPONSE_MESSAGES.INVALID);
  }
};
