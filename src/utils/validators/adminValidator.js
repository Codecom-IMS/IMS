// const Admins = require("../../models/mongoModel/admins");
// const jwt = require("jsonwebtoken");
// const config = require("../../config/config");
// const ACCESS_TOKEN_SECRET = config.secret;

// const validateAdmin = async (req, res, next) => {
//   const user = { email: req.body.email, password: req.body.password };
//   try {
//     const adminData = await Admins.find({ email });
//     if (adminData[0]) {
//       const token = jwt.sign(user.email, ACCESS_TOKEN_SECRET);
//       // res.json({message: "Login Successful", token})
//     } else {
//       res.json({ message: "Invalid Email or Password" });
//     }
//     console.log(user.email);
//     next();
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = validateAdmin;
