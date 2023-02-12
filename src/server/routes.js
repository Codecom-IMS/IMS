const app = require("./expressApp");
const userRoutes = require("../routes/userRoutes");
app.use("/api/teacher/attendancePage", userRoutes);
app.use("/api/admin/attendancePage", userRoutes);

module.exports = app;
