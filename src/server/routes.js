const app = require("./expressApp");

const adminRoutes = require("../routes/admin"); 
const teacherRoutes = require("../routes/teacher");

app.use("/api/admin/", adminRoutes);
app.use("/api/teacher/", teacherRoutes);

module.exports = app;
