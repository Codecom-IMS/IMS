const adminRepository = require("../repositories/adminRepository");

class AdminServices {
  static async getSudentFeeDetails(roll_number) {
    try {
      const result = await adminRepository.getSudentFeeDetails(roll_number);

      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getPrevArrears(roll_number) {
    try {
      const result = await adminRepository.getPrevArrears(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getStudentDetails(roll_number, object) {
    try {
      const result = await adminRepository.getStudentDetails(roll_number);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async pushFeeDetails(details) {
    try {
      await adminRepository.pushFeeDetails(details);
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentStatus(rollNumberToFind) {
    try {
      await adminRepository.updateStudentStatus(rollNumberToFind);
    } catch (error) {
      throw error;
    }
  }
  static async totalLength() {
    try {
      const result = await adminRepository.totalLength();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateStudentsFee() {
    try {
      return await adminRepository.updateStudentsFeeInDB();
    } catch (error) {
      throw error;
    }
  }
}
module.exports = AdminServices;
