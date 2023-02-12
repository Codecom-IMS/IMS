const AdminControllers = require("../controllers/adminController");

const adminRoutes = require("express").Router();

adminRoutes.get("/getStudents", AdminControllers.getStudent);
adminRoutes.put("/updateStudent/:rollNumber", AdminControllers.updateStudent);
adminRoutes.post("/addStudent", AdminControllers.addStudent);
adminRoutes.delete("/deleteStudent", AdminControllers.deleteStudent);

adminRoutes.get("/getTeachers", AdminControllers.getTeacher);
adminRoutes.post("/addTeacher", AdminControllers.addTeacher);
adminRoutes.put("/updateTeacher/:id", AdminControllers.updateTeacher);
adminRoutes.delete("/deleteTeacher", AdminControllers.deleteTeacher);

module.exports = adminRoutes;
