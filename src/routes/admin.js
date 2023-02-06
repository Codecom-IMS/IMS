const UserController = require("../controllers/UserController");
const routes = require("express").Router;
const Router = routes();
Router.get("/feeDetails", UserController.getSudentFeeDetails);
Router.post("/addFee", UserController.addFee);
module.exports = Router;