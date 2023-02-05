const student = require("../models/students");
const feeDetail = require("../models/fee_details");
const UserServices = require("../app/services/userServices");
const ifArrearsExists = require("../utils/if_arrears_exists");
const DateFormat = require("../utils/dateFormat");
class UserController {
  static async getSudentFeeDetails(req, res) {
    try {
      var rollNumberToFind = req.body.roll_number;
      const studentDetails = await UserServices.getSudentFeeDetails(
        rollNumberToFind
      );
      const PrevArrears = await UserServices.getPrevArrears(rollNumberToFind);
      res.send({ studentDetails, PrevArrears });
    } catch (error) {
      throw error;
    }
  }

  static async addFee(req, res) {
    try {
      var rollNumberToFind = req.body.roll_number;
      const PrevArrears = await UserServices.getPrevArrears(rollNumberToFind);
      const studentDetails = await UserServices.getSudentFeeDetails(
        rollNumberToFind
      );
      const totalLength = await UserServices.totalLength();
      const details = {
        id: totalLength,
        student_name: studentDetails[0].student_name,
        student_id: studentDetails[0].roll_number,
        basic_fee: studentDetails[0].basic_fee,
        current_paid_fee: req.body.current_paid_fee,
        others: studentDetails[0].others,
        class: studentDetails[0].class,
        date: DateFormat(),
      };
      const newDetails = ifArrearsExists(PrevArrears, details);
      await UserServices.updateStudentStatus(rollNumberToFind);
      await UserServices.pushFeeDetails(newDetails);
      res.json({status: 200, message: "Operation Succesfull"})
    } catch (error) {
      throw error;
    }
  }
  static async updateFee() {
    const status = await UserServices.updateStudentsFee;
    if (status) {
      console.log("fee status Updated");
    } else {
      console.log("An error occured while updating fee status");
    }
  }
}
module.exports = UserController;
