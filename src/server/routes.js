const app  = require('./expressApp');
const adminRoutes = require('../routes/admin');
app.use('/api/admin',adminRoutes);

module.exports = app;