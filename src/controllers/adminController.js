const AdminServices = require("../app/services/adminServices");
const ifArrearsExists = require("../utils/if_arrears_exists");
const DateFormat = require("../utils/dateFormat");
const logger = require("../utils/logger");
const { status } = require("../constants/constant");
const ResultValidator = require("../utils/validators/resultValidator");
const {
  API_STATUS_CODES,
  RESPONSE_MESSAGES,
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
      logger.info(`${status.success} Student Details Received`);
      res.send({ studentDetails, PrevArrears });
    } catch (error) {
      logger.error(`${status.error} Student Details Retreivel Failed`);
    }
  }

  static async addFee(req, res) {
    try {
      console.log(rollNumberToFind);
      var rollNumberToFind = req.body.roll_number;
      const PrevArrears = await AdminServices.getPrevArrears(rollNumberToFind);
      const studentDetails = await AdminServices.getSudentFeeDetails(
        rollNumberToFind
      );

      const totalLength = await AdminServices.totalLength();
      const details = {
        id: totalLength,
        student_name: studentDetails.student_name,
        student_id: studentDetails.roll_number,
        basic_fee: studentDetails.basic_fee,
        current_paid_fee: req.body.current_paid_fee,
        others: studentDetails.others,
        class: studentDetails.class,
        date: DateFormat(),
      };

      const newDetails = ifArrearsExists(PrevArrears, details);
      await AdminServices.updateStudentStatus(rollNumberToFind);
      await AdminServices.pushFeeDetails(newDetails);
      logger.info(`${status.success} Student Fee Added Succesfuly`);
      res.json({ status: 200, message: "Operation Succesfull" });
    } catch (error) {
      logger.error(`${status.error}Failed to Add Fee `);
    }
  }
  static async updateFee() {
    const status = await AdminServices.updateStudentsFee();
    if (status) {
      logger.info(`${status.success} fee Updated`);
    } else {
      logger.error(`${status.error}An error occured while updating fee`);
    }
  }
  static async adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log("userCredentials", email, password);
    const admins = await AdminService.adminLogin(email, password);
    if (admins.status == 200) {
      res.json({
        data: admins,
      });
    } else {
      res.json({ admins });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
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
