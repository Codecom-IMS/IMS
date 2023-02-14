const AdminServices = require("../app/services/adminServices");
const logger = require("../utils/logger");
const ResultValidator = require("../utils/validators/resultValidator");
const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
  CONTROLLER_ERROR,
} = require("../constants/constants");
class AdminControllers {
  static getStudent = async (req, res) => {
    const students = await AdminServices.getStudents(req);
    res.json({
      status: API_STATUS_CODES.SUCCESS,
      message: "Operation Successfull",
      body: students,
    });
  };

  static addStudent = async (req, res) => {
    const status = await AdminServices.addStudentData(req);
    if (status) {
      res
        .status(API_STATUS_CODES.SUCCESS)
        .send({ status: "Student Successfully" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };
  static updateStudent = async (req, res) => {
    const status = await AdminServices.updateStudentData(req);
    if (status) {
      res.status(API_STATUS_CODES.SUCCESS).send({ status: "Student updated" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };
  static updateFeeStatus = async () => {
    await AdminServices.updateStudentsFeeStatus();
  };

  static deleteStudent = async (req, res) => {
    const status = await AdminServices.deleteStudentData(req);
    if (status) {
      res.status(API_STATUS_CODES.SUCCESS).send({ status: "Student deleted" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };

  static getTeacher = async (req, res) => {
    const teachers = await AdminServices.getTeachers(req);
    res.json({
      status: API_STATUS_CODES.SUCCESS,
      message: "Operation Successfull",
      body: teachers,
    });
  };
  static addTeacher = async (req, res) => {
    const status = await AdminServices.addTeacherData(req);
    if (status) {
      res
        .status(API_STATUS_CODES.SUCCESS)
        .send({ status: "Teacher Added Successfully" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };
  static updateTeacher = async (req, res) => {
    const status = await AdminServices.updateTeacherData(req);
    if (status) {
      res
        .status(API_STATUS_CODES.SUCCESS)
        .send({ status: "Teacher updated Successfully" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };
  static deleteTeacher = async (req, res) => {
    const status = await AdminServices.deleteTeacherData(req);
    if (status) {
      res
        .status(API_STATUS_CODES.SUCCESS)
        .send({ status: "Teacher deleted successfully" });
    } else {
      res
        .status(API_STATUS_CODES.INTERNAL_SERVER_ERROR)
        .send({ status: RESPONSE_MESSAGES.ERROR_MESSAGE });
    }
  };

  static async getSudentFeeDetails(req, res) {
    try {
      let rollNumberToFind = req.query.roll_number;
      const studentDetails = await AdminServices.getSudentFeeDetails(
        rollNumberToFind
      );
      const PrevArrears = await AdminServices.getPrevArrears(rollNumberToFind);
      logger.info(`${API_STATUS_CODES.SUCCESS} Student Details Received`);
      res.send({ studentDetails, PrevArrears });
    } catch (error) {
      logger.error(
        `${API_STATUS_CODES.NOT_FOUND} Student Details Retreivel Failed`
      );
    }
  }

  static async addFee(req, res) {
    try {
      let rollNumberToFind = req.body.roll_number;
      let current_paid_fee = req.body.current_paid_fee;
      await AdminServices.addFee(rollNumberToFind, current_paid_fee);
      logger.info(`${API_STATUS_CODES.SUCCESS} Student Fee Added Succesfuly`);
      res.json({
        status: API_STATUS_CODES.SUCCESS,
        message: RESPONSE_MESSAGES.SUCCESS,
      });
    } catch (error) {
      logger.error(`${API_STATUS_CODES.NOT_FOUND} Failed to Add Fee `);
    }
  }
  static async updateFee() {
    const status = await AdminServices.updateStudentsFee();
    if (status) {
      logger.info(`${API_STATUS_CODES.SUCCESS} fee Updated`);
    } else {
      logger.error(
        `${API_STATUS_CODES.NOT_FOUND}An error occured while updating fee`
      );
    }
  }
  static async adminLogin(req, res) {
    try {
      const { email, password } = req.body;
      const admins = await AdminServices.adminLogin(email, password);
      logger.info("Successfully Admin Logged In");
      if (admins.status == 200) {
        res.json({
          data: admins,
        });
      } else {
        logger.error("Admin Login Failed");
        res.json({ admins });
      }
    } catch (error) {
      res.status(500).send(CONTROLLER_ERROR.message);
    }
  }
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
