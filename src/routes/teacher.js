const { teacherLogin } = require("../controllers/teacherController");
const routes = require("express").Router;
const Router = routes();

Router.post("/login", teacherLogin);

module.exports = Router;
