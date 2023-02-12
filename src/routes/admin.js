const AdminControllers = require("../controllers/adminController");

const adminRoutes = require("express").Router();

adminRoutes.get(
  "/getOneStudentAttendance",
  AdminControllers.getOneStudentAttendance
);
adminRoutes.get("/getClassAttendance", AdminControllers.getClassAttendance);
adminRoutes.get(
  "/getOneStudentFeeReport",
  AdminControllers.getOneStudentFeeReport
);
adminRoutes.get(
  "/getWholeClassFeeReport",
  AdminControllers.getWholeClassFeeReport
);

module.exports = adminRoutes;
