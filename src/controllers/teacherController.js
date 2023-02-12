const TeacherService = require("../app/services/teacherServices");
require("dotenv").config();
const config = require("../config/config");
const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
  ACCESS_TOKEN_SECRET,
} = require("../constants/constants");

exports.teacherLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("userCredentials", email, password);
    const teachers = await TeacherService.teacherLogin(email, password);
    if (teachers.status === API_STATUS_CODES.SUCCESS) {
      res.json({
        data: teachers,
      });
    } else {
      res.json({ teachers });
    }
  } catch (error) {
    logger.error(RESPONSE_MESSAGES.INVALID);
    res.status(500).send(API_STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};
