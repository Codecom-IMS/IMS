const { getAllTeachers ,getAllTeacher} = require("../controllers/teacherController");
const routes = require("express").Router;
const Router = routes();

Router.post("/login", getAllTeachers);


module.exports = Router;
