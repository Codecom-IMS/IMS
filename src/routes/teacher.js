const teacherController = require("../controllers/teacherController");

const routes = require("express").Router;
const Router = routes();

// Router.get("/teachers/", teacherController.getTeacherByCustomId);

Router.put("/teachers", teacherController.editTeacher);
Router.post("/teachers", teacherController.addnewTeachers);
Router.get("/teachers/:id", teacherController.getTeacherById);
Router.get("/teachers", teacherController.getAllTeachers);
Router.delete("/teachers/:id", teacherController.deleteTeacher);
Router.get("/login", teacherController.teacherLogin);

module.exports = Router;
