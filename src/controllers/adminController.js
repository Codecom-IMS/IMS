const AdminServices = require("../app/services/adminServices");
const logger = require("../utils/logger");
const ResultValidator = require("../utils/validators/resultValidator");
const {
  RESPONSE_MESSAGES,
  API_STATUS_CODES,
} = require("../constants/constants");

class AdminControllers {
  static async getOneStudentAttendance(req, res) {
    let roll_num = req.query.roll_num;
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;
    try {
      const response = await AdminServices.getOneStudentsAttendance(
        roll_num,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: response,
          })
        : res.json({
            status: API_STATUS_CODES.NOT_FOUND,
            message: RESPONSE_MESSAGES.INVALID,
            body: [],
          });
    } catch (error) {
      res.json({
        status: API_STATUS_CODES.ERROR_CODE,
        message: RESPONSE_MESSAGES.ERROR,
      });
      logger.error(RESPONSE_MESSAGES.ERROR);
    }
  }

  static async getClassAttendance(req, res) {
    let std_grade = req.query.std_grade;
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;
    try {
      const response = await AdminServices.getStudentAttByClass(
        std_grade,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: response,
          })
        : res.json({
            status: API_STATUS_CODES.NOT_FOUND,
            message: RESPONSE_MESSAGES.INVALID,
            body: [],
          });
    } catch (error) {
      res.json({
        status: API_STATUS_CODES.ERROR_CODE,
        message: RESPONSE_MESSAGES.ERROR,
      });
      logger.error(RESPONSE_MESSAGES.ERROR);
    }
  }

  static async getOneStudentFeeReport(req, res) {
    let roll_num = req.query.roll_num;
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;
    try {
      const response = await AdminServices.getOneStudentFeeReport(
        roll_num,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: response,
          })
        : res.json({
            status: API_STATUS_CODES.NOT_FOUND,
            message: RESPONSE_MESSAGES.INVALID,
            body: [],
          });
    } catch (error) {
      res.json({
        status: API_STATUS_CODES.ERROR_CODE,
        message: RESPONSE_MESSAGES.ERROR,
      });
      logger.error(RESPONSE_MESSAGES.ERROR);
    }
  }
  static async getWholeClassFeeReport(req, res) {
    let std_grade = req.query.std_grade;
    let start_date = req.query.start_date;
    let end_date = req.query.end_date;
    try {
      const response = await AdminServices.getWholeClassFeeReport(
        std_grade,
        start_date,
        end_date
      );
      const validation = ResultValidator(response);
      validation
        ? res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: response,
          })
        : res.json({
            status: API_STATUS_CODES.NOT_FOUND,
            message: RESPONSE_MESSAGES.INVALID,
            body: [],
          });
    } catch (error) {
      res.json({
        status: API_STATUS_CODES.ERROR_CODE,
        message: RESPONSE_MESSAGES.ERROR,
      });
      logger.error(RESPONSE_MESSAGES.ERROR);
    }
  }
}

module.exports = AdminControllers;
