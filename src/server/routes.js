const app  = require('./expressApp');
const {studentRoutes} = require('../routes/student');
const {teacherRoutes} = require('../routes/teacher');
app.use('/api/student',studentRoutes);
app.use('/api/teacher',teacherRoutes);

module.exports = app;