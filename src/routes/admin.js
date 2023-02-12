const {AdminControllers} = require("../controllers/adminController");
const routes = require("express").Router;
const Router = routes();

Router.post("/login", AdminControllers);

module.exports = Router;
