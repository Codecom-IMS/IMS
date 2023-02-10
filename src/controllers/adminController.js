const Admin = require("../models/mongoModel/admins");
const AdminService = require("../app/services/adminServices");
const Authentication = require("../middlewares/authentication");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const validateAdmin = require("../utils/validators/adminValidator");
const ACCESS_TOKEN_SECRET = config.secret;
// console.log(ACCESS_TOKEN_SECRET);
exports.getAllAdmins = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('userCredentials',email,password)
    const admins = await AdminService.getAllAdmins(email, password);
    if (admins.status == 200) {
      res.json({
        data: admins,
      });
    } else {
      res.json({ admins });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};



exports.createAdmin = async (req, res) => {
  try {
    const adminService = new AdminService();
    const admin = await adminService.createAdmin(req.body);
    res.status(201).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};


exports.updateAdmin = async (req, res) => {
  try {
    const adminService = new AdminService();
    const admin = await adminService.updateAdmin(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const adminService = new AdminService();
    await adminService.deleteAdmin(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
