const student = require("../models/students");
const feeDetail = require("../models/fee_details");
const UserServices = require("../app/services/userServices");
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
      date: req.body.date,
    };
    if (PrevArrears) {
      const fee = parseInt(details.basic_fee);
      const others = parseInt(details.others);
      const lastarrears = parseInt(PrevArrears.arrears);
      let totalAmountToPay = fee + others + lastarrears;
      details.arrears = totalAmountToPay - details.current_paid_fee;
      res.send("fee Added 1");
    } else {
      const fee = parseInt(details.basic_fee);
      const others = parseInt(details.others);
      let totalAmountToPay = fee + others;
      details.arrears = totalAmountToPay - details.current_paid_fee;
      res.send("fee added 2 ");
    }
    await UserServices.updateStudentStatus(rollNumberToFind);
    await UserServices.pushFeeDetails(details);
  }
}
module.exports = UserController;
