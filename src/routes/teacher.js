const { getAllTeachers } = require("../controllers/teacherController");
const routes = require("express").Router;
const Router = routes();

Router.get("/teachers", getAllTeachers);

module.exports = Router;
