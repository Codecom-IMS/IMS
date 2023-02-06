const UserRepository = require("../repositories/UserRepository");

class UserServices {
  static async getSudentFeeDetails(roll_number) {
    try {
      const result = await UserRepository.getSudentFeeDetails(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getPrevArrears(roll_number) {
    try {
      const result = await UserRepository.getPrevArrears(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getStudentDetails(roll_number, object) {
    try {
      const result = await UserRepository.getStudentDetails(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async pushFeeDetails(details) {
    try {
      await UserRepository.pushFeeDetails(details);
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentStatus(rollNumberToFind) {
    try {
      await UserRepository.updateStudentStatus(rollNumberToFind);
    } catch (error) {
      throw error;
    }
  }
  static async totalLength() {
    try {
      const result = await UserRepository.totalLength();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentsFee() {
    try {
      return await UserRepository.updateStudentsFeeInDB();
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UserServices;
