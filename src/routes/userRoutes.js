const UserController = require("../controllers/userController");
const routes = require("express").Router;
const Router = routes();
Router.get("/inputAttendance", UserController.getAllStudents);
Router.get("/editAttendance", UserController.getAttendance);
Router.post("/inputAttendance", UserController.addnewAttendance);
Router.put("/editAttendance", UserController.editAttendance);
module.exports = Router;
