const UserController = require('../controllers/userController');

const routes = require('express').Router;
const Router = routes();

Router.get('/getOneStudentAttendance', UserController.getOneStudentAttendance);
Router.get('/feeReport', UserController.feeReport);
Router.get('/getClassAttendance', UserController.getClassAttendance);

module.exports = Router