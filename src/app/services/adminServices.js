const AdminRepository = require("../repositories/adminRepository");
const AdminFactory = require("../factories/adminFactory");

class AdminServices {
  static async adminLogin(email, password) {
    try {
      const result = await AdminRepository.adminLogin(email, password);
      const data = await AdminFactory.adminLogin(result);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminServices;
