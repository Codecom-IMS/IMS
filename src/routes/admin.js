const {getStudent,addStudent,updateStudent,deleteStudent,getTeacher,addTeacher,updateTeacher,deleteTeacher} = require('../controllers/admin');

const adminRoutes = require("express").Router();
// const teacherRoutes = require('express').Router();

adminRoutes.get('/getStudents',getStudent);
adminRoutes.put('/updateStudent/:rollNumber',updateStudent);
adminRoutes.post('/addStudent',addStudent);
adminRoutes.delete('/deleteStudent',deleteStudent);

adminRoutes.get('/getTeachers',getTeacher);
adminRoutes.post('/addTeacher',addTeacher);
adminRoutes.put('/updateTeacher/:id',updateTeacher);
adminRoutes.delete('/deleteTeacher',deleteTeacher);


module.exports = {adminRoutes};