const fee_details = require("../../models/fee_details");
const students = require("../../models/students");

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
      console.log(details);
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
}
module.exports = UserRepository;
