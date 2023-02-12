const UserService = require("../app/services/userService");
const DateFormat = require("../utils/dateFormat");
const ResultValidator = require("../utils/validators/resultValidator");
const {
  STATUSES,
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
} = require("../constants/constants");
const logger = require("../utils/logger");
class UserController {
  static async getAllStudents(req, res) {
    try {
      const className = req.query.class;
      const date = req.query.date;
      const result = await UserService.getAttendance(className, date);
      const duplicateAttendance = ResultValidator(result);
      const response = await UserService.getStudents(
        className,
        STATUSES.ACTIVE
      );
      const validation = ResultValidator(response);
      if (validation) {
        if (!duplicateAttendance) {
          res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: response,
          });
        } else {
          logger.error(
            `${API_STATUS_CODES.DUPLICATE_ENTRY}: ${RESPONSE_MESSAGES.DUPLICATE}`
          );
          res.json({
            status: API_STATUS_CODES.DUPLICATE_ENTRY,
          });
        }
      } else {
        logger.error(
          `${API_STATUS_CODES.NOT_FOUND}: ${RESPONSE_MESSAGES.INVALID}`
        );
        res.json({
          status: API_STATUS_CODES.NOT_FOUND,
          message: RESPONSE_MESSAGES.INVALID,
        });
      }
    } catch (error) {
      logger.error(
        `${API_STATUS_CODES.INTERNAL_SERVER_ERROR}: ${RESPONSE_MESSAGES.ERROR}`
      );
      res.send(RESPONSE_MESSAGES.ERROR);
    }
  }
  static async addnewAttendance(req, res) {
    try {
      const className = req.body.class;
      const attendance = req.body.attendance;
      const students = await UserService.getRollNumbers(
        className,
        STATUSES.ACTIVE
      );
      const attendances = await UserService.generateAttendance(
        students,
        attendance
      );
      const totalAttendance = await UserService.getTotalAttendance();
      const validation = ResultValidator(students);
      if (validation) {
        await UserService.insertAttendance({
          att_id: totalAttendance.length + 1,
          date: DateFormat(),
          class: className,
          att: attendances,
        });
        res.json({
          status: API_STATUS_CODES.SUCCESS,
          message: RESPONSE_MESSAGES.SUCCESS,
        });
      } else {
        logger.error(
          `${API_STATUS_CODES.NOT_FOUND}: ${RESPONSE_MESSAGES.INVALID}`
        );
        res.json({
          status: API_STATUS_CODES.NOT_FOUND,
          message: RESPONSE_MESSAGES.INVALID,
        });
      }
    } catch (error) {
      logger.error(
        `${API_STATUS_CODES.INTERNAL_SERVER_ERROR}: ${RESPONSE_MESSAGES.ERROR}`
      );
      res.json({ message: RESPONSE_MESSAGES.ERROR });
    }
  }
  static async editAttendance(req, res) {
    try {
      const details = {
        class: req.body.class,
        date: req.body.date,
      };
      const attendance = req.body.attendance;
      const students = await UserService.getRollNumbers(
        details.class,
        STATUSES.ACTIVE
      );
      const attendances = await UserService.generateAttendance(
        students,
        attendance
      );
      const validation = ResultValidator(students);
      if (validation) {
        await UserService.editAttendance(details, attendances);
        res.json({
          status: API_STATUS_CODES.SUCCESS,
          message: RESPONSE_MESSAGES.SUCCESS,
        });
      } else {
        logger.error(
          `${API_STATUS_CODES.NOT_FOUND}: ${RESPONSE_MESSAGES.INVALID}`
        );
        res.json({
          status: API_STATUS_CODES.NOT_FOUND,
          message: RESPONSE_MESSAGES.INVALID,
        });
      }
    } catch (error) {
      logger.error(
        `${API_STATUS_CODES.INTERNAL_SERVER_ERROR}: ${RESPONSE_MESSAGES.ERROR}`
      );
      res.json({ message: RESPONSE_MESSAGES.ERROR });
    }
  }
  static async getAttendance(req, res) {
    try {
      const details = { class: req.query.class, date: req.query.date };
      const attendance = await UserService.getAttendance(
        details.class,
        details.date
      );
      const validation = ResultValidator(attendance);
      validation
        ? res.json({
            status: API_STATUS_CODES.SUCCESS,
            message: RESPONSE_MESSAGES.SUCCESS,
            body: attendance,
          })
        : (logger.error(
            `${API_STATUS_CODES.NOT_FOUND}: ${RESPONSE_MESSAGES.INVALID}`
          ),
          res.json({
            status: API_STATUS_CODES.NOT_FOUND,
            message: RESPONSE_MESSAGES.INVALID,
          }));
    } catch (error) {
      logger.error(
        `${API_STATUS_CODES.INTERNAL_SERVER_ERROR}: ${RESPONSE_MESSAGES.ERROR}`
      );
      res.json({ message: RESPONSE_MESSAGES.ERROR });
    }
  }
}
module.exports = UserController;
