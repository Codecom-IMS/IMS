const UserService = require("../app/services/userService");
const DateFormat = require("../utils/dateformat");
const ResultValidator = require("../utils/validators/resultValidator");
const {
  ResponseMessages,
  Statuses,
  statusCodes,
} = require("../constants/constants");
class UserController {
  static async getAllStudents(req, res) {
    const className = req.body.class;
    try {
      const response = await UserService.getStudents(
        className,
        Statuses.active
      );
      const validation = await ResultValidator(response);
      validation
        ? res.json({
            status: statusCodes.success,
            message: ResponseMessages.success,
            body: response,
          })
        : res.json({
            status: statusCodes.notFound,
            message: ResponseMessages.invalid,
          });
    } catch (error) {
      res.send(ResponseMessages.error);
    }
  }
  static async addnewAttendance(req, res) {
    const className = req.body.class;
    const students = await UserService.getRollNumbers(
      className,
      Statuses.active
    );
    const result = await UserService.generateAttendance(students);
    const totalAttendance = await UserService.getTotalAttendance();
    const validation = ResultValidator(students);
    if (validation) {
      await UserService.insertAttendance({
        att_id: totalAttendance.length + 1,
        date: DateFormat(),
        class: className,
        att: result,
      });
      res.json({
        status: statusCodes.success,
        message: ResponseMessages.success,
      });
    } else {
      res.json({
        status: statusCodes.notFound,
        message: ResponseMessages.invalid,
      });
    }
  }
  static async editAttendance(req, res) {
    try {
      const details = {
        class: req.body.class,
        date: req.body.date,
      };
      const students = await UserService.getRollNumbers(
        details.class,
        Statuses.active
      );
      const attendance = await UserService.generateAttendance(students);
      const validation = await ResultValidator(students);
      if (validation) {
        await UserService.editAttendance(details, attendance);
        res.json({
          status: statusCodes.success,
          message: ResponseMessages.success,
        });
      } else {
        res.json({
          status: statusCodes.notFound,
          message: ResponseMessages.invalid,
        });
      }
    } catch (error) {
      res.json({ message: ResponseMessages.error });
    }
  }
  static async getAttendance(req, res) {
    try {
      const details = { class: req.body.class, date: req.body.date };
      const attendance = await UserService.getAttendance(
        details.class,
        details.date
      );
      const validation = await ResultValidator(attendance);
      validation
        ? res.json({
            status: statusCodes.success,
            message: ResponseMessages.success,
            body: attendance,
          })
        : res.json({
            status: statusCodes.notFound,
            message: ResponseMessages.invalid,
          });
    } catch (error) {
      res.json({ message: ResponseMessages.error });
    }
  }
}
module.exports = UserController;
