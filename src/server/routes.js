const app = require("./expressApp");
const adminRoutes = require("../routes/admin");
const userRoutes = require("../routes/userRoutes");
app.use("/api/teacher/attendancePage", userRoutes);
app.use("/api/admin/attendancePage", userRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;
