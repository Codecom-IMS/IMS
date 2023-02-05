const UserController = require('../controllers/userController');

const routes = require('express').Router;
const Router = routes();

Router.get('/getOneStudentAttendance', UserController.getOneStudentAttendance);
Router.get('/getClassAttendance', UserController.getClassAttendance);
Router.get('/getOneStudentFeeReport', UserController.getOneStudentFeeReport);
Router.get('/getWholeClassFeeReport', UserController.getWholeClassFeeReport);


module.exports = Router