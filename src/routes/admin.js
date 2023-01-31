const UserController = require('../controllers/userController');

const routes = require('express').Router;
const Router = routes();

Router.get('/getStudents', UserController.getStudents);
Router.get('/feeReport', UserController.feeReport);
Router.get('/attendanceReport', UserController.attendanceReport);

module.exports = Router