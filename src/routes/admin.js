const { getAllAdmins } = require("../controllers/adminController");
const routes = require("express").Router;
const Router = routes();

Router.post("/login", getAllAdmins);

module.exports = Router;
