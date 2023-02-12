const app = require("./expressApp");
const teacherRoutes = require("../routes/teacher");
const adminRoutes = require("../routes/admin");
const userRoutes = require("../routes/userRoutes");
app.use("/api/teacher/attendancePage", userRoutes);
app.use("/api/admin/attendancePage", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher/", teacherRoutes);

module.exports = app;
