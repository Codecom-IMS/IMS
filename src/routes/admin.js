const AdminController = require("../controllers/adminController");

const routes = require("express").Router;
const Router = routes();

Router.get("/admins/", AdminController.getAdminById);
Router.post("/admins", AdminController.addnewAdmins);
Router.put("/admins/:id", AdminController.editAdmins);
Router.delete("/admins/:id", AdminController.deleteAdmin);
Router.get("/login", AdminController.adminLogin);



module.exports = Router;
