const fee_details = require("../../models/fee_details");
const students = require("../../models/students");
const ifArrearsExists = require("../../utils/if_arrears_exists");

class UserRepository {
  static async getSudentFeeDetails(roll_number) {
    try {
      const details = await students.find(
        { roll_number: roll_number },
        {
          student_name: 1,
          roll_number: 1,
          basic_fee: 1,
          others: 1,
          class :1
        }
      );
      return details;
    } catch (error) {
      throw error;
    }
  }
  static async getPrevArrears(roll_number) {
    try {
      const details = await fee_details.find(
        { student_id: roll_number },
        { arrears: 1, _id: 0 }
      );
      return details[details.length - 1];
    } catch (error) {
      throw error;
    }
  }

  static async pushFeeDetails(details) {
    try {
      await fee_details.insertMany(details);
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentStatus(rollNumberToFind) {
    try {
      await students.updateOne(
        { roll_number: rollNumberToFind },
        { $set: { fee_status: "paid" } }
      );
    } catch (error) {
      throw error;
    }
  }

  static async totalLength() {
    try {
      const details = await fee_details.find();
      return details.length + 1;
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentsFeeInDB() {
    try {
      const unpaidStudents = await students.find(
        { fee_status: "upaid" },
        {
          roll_number: 1,
          student_name: 1,
          roll_number: 1,
          basic_fee: 1,
          others: 1,
        }
      );
      for (let i = 0; i < unpaidStudents.length; i++) {
        let rollNumberToFind = unpaidStudents[i].roll_number;
        const PrevArrears = await getPrevArrears(rollNumberToFind);
        const studentDetails = await getSudentFeeDetails(rollNumberToFind);
        const totalLength = await totalLength();
        const details = {
          id: totalLength,
          student_id: studentDetails[0].roll_number,
          student_name: studentDetails[0].student_name,
          student_id: studentDetails[0].roll_number,
          basic_fee: studentDetails[0].basic_fee,
          current_paid_fee: 0,
          others: studentDetails[0].others,
          class: studentDetails[0].class,
          date: req.body.date,
        };
        const newDetails = ifArrearsExists(PrevArrears, details);
        await updateStudentStatus(rollNumberToFind);
        await pushFeeDetails(newDetails);
      }
    } catch (error) {
      return false;
    }
  }
}
module.exports = UserRepository;
