const { getAllAdmins } = require("../controllers/adminController");
const routes = require("express").Router;
const Router = routes();

Router.get("/admins", getAllAdmins);

module.exports = Router;
