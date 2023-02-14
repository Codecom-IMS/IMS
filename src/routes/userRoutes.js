const UserController = require("../controllers/userController");
const Authorization = require("../utils/authorization");
const routes = require("express").Router;
const Router = routes();
Router.get("/inputAttendance", UserController.getAllStudents);
Router.get("/editAttendance", UserController.getAttendance);
Router.post("/inputAttendance", UserController.addnewAttendance);
Router.put("/editAttendance", UserController.editAttendance);
Router.get("/",Authorization)
module.exports = Router;
