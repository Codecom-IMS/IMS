const {getTeacher,addTeacher,updateTeacher,deleteTeacher} = require("../controllers/teacher");

const teacherRoutes = require('express').Router();

teacherRoutes.get('/',getTeacher);
teacherRoutes.post('/',addTeacher);
teacherRoutes.put('/',updateTeacher);
teacherRoutes.delete('/',deleteTeacher);

module.exports = {teacherRoutes}