const {getStudent,addStudent,updateStudent,deleteStudent} = require('../controllers/student')

const studentRoutes = require("express").Router();

studentRoutes.get('/',getStudent);

studentRoutes.put('/',updateStudent);
studentRoutes.post('/',addStudent);
studentRoutes.delete('/',deleteStudent);


module.exports = {studentRoutes};