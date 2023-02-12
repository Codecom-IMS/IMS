const AdminControllers = require("../controllers/adminController");
const routes = require("express").Router;
const Router = routes();
Router.get("/feeDetails", AdminControllers.getSudentFeeDetails);
Router.post("/feeDetails", AdminControllers.addFee);
module.exports = Router;