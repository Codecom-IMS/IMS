const Teachers = require("../models/mongoModel/teachers");
const TeacherService = require("../app/services/teacherServices");
const Authentication = require("../middlewares/authentication");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const validateAdmin = require("../utils/validators/adminValidator");
const ACCESS_TOKEN_SECRET = config.secret;

exports.getAllTeachers = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('userCredentials',email,password)
    const teachers = await TeacherService.getAllTeachers(email, password);
    if (teachers.status == 200) {
      res.json({
        data: teachers,
      });
    } else {
      res.json({ teachers });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
