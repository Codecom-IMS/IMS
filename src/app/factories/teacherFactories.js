const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const {ACCESS_TOKEN_SECRET} = require("../../constants/constants")

class TeacherFactory {
  static async teacherLogin(response) {
    try {
      if (response) {
        const token = jwt.sign({email:response.email,role:"teacher"}, ACCESS_TOKEN_SECRET);
        return {
          status: 200,
          token,
          id: response._id,
          name: response.name,
          teacherId: response.id,
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

module.exports = TeacherFactory;
