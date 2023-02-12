const AdminService = require("../app/services/adminServices");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("../config/config");
// console.log(ACCESS_TOKEN_SECRET);
exports.AdminControllers = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("userCredentials", email, password);
    const admins = await AdminService.adminLogin(email, password);
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


