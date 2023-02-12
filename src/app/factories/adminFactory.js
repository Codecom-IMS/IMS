const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const ACCESS_TOKEN_SECRET = config.secret;

class AdminFactory {
  static async adminLogin(response) {
    try {
      if (response) {
        console.log(response);
        const token = jwt.sign(response.email, ACCESS_TOKEN_SECRET);
        return {
          status: 200,
          token,
          id: response.id,
          admin_name: response.admin_name,
          adminId: response.id,
          email: response.email,
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
