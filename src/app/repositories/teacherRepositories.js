const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const ACCESS_TOKEN_SECRET = config.secret;

class AdminFactory {
  static async getAllAdmins(data) {
    try {
      if (data) {
        console.log(data);
        const token = jwt.sign(data.email, ACCESS_TOKEN_SECRET);
        return {
          status: 200,
          token,
          admin_name: data.admin_name,
          adminId: data.id,
          email: data.email,
        };
      } else {
        const respose = { status: 404, message: "Invalid Email or Password" };
        return respose;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminFactory;
