const UserController = require("../controllers/UserController");
const routes = require("express").Router;
const Router = routes();
Router.get("/feeDetails", UserController.getFeeDetails);
Router.post("/addFee", UserController.postFee);
module.exports = Router;
