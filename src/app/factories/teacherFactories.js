const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const {ACCESS_TOKEN_SECRET} = require("../../constants/constants")

class TeacherFactory {
  static async teacherLogin(data) {
    try {
      if (data) {
        const token = jwt.sign(data.email, ACCESS_TOKEN_SECRET);
        return {
          status: 200,
          token,
          id: data._id,
          name: data.name,
          teacherId: data.id,
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

module.exports = TeacherFactory;
