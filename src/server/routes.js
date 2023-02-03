const app = require("./expressApp");

const teacherRoutes = require("../routes/teacher");
const adminRoutes = require("../routes/admin");

app.use("/api/teacher/", teacherRoutes);
app.use("/api/admin/", adminRoutes);

module.exports = app;
