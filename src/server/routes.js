const app = require("./expressApp");
const userRoutes = require("../routes/userRoutes");
app.use("/api/teacher/", userRoutes);
app.use("/api/admin/", userRoutes);

module.exports = app;
