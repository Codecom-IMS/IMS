const student = require("../models/students");
const feeDetail = require("../models/fee_details");
const UserServices = require("../app/services/userServices");
const ifArrearsExists = require("../utils/if_arrears_exists");
const DateFormat = require("../utils/dateFormat");
const logger = require("../utils/logger");
const status = require("../constants/constant")

class UserController {
  static async getSudentFeeDetails(req, res) {
    try {
      let rollNumberToFind = req.query.roll_number;
      const studentDetails = await UserServices.getSudentFeeDetails(
        rollNumberToFind
      );
      const PrevArrears = await UserServices.getPrevArrears(rollNumberToFind);
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
      const PrevArrears = await UserServices.getPrevArrears(rollNumberToFind);
      const studentDetails = await UserServices.getSudentFeeDetails(
        rollNumberToFind
      );

      const totalLength = await UserServices.totalLength();
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
      await UserServices.updateStudentStatus(rollNumberToFind);
      await UserServices.pushFeeDetails(newDetails);
      logger.info(`${status.success} Student Fee Added Succesfuly`);
      res.json({ status: 200, message: "Operation Succesfull" });
    } catch (error) {
      logger.error(`${status.error}Failed to Add Fee `);
    }
  }
  static async updateFee() {
    const status = await UserServices.updateStudentsFee();
    if (status) {
      logger.info(`${status.success} fee Updated`);
    } else {
      logger.error(`${status.error}An error occured while updating fee`);
    }
  }
}
module.exports = UserController;
