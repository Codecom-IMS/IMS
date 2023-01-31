const app = require('./expressApp');
const amdinRoutes = require('../routes/admin')
app.use('/api/admin', amdinRoutes);

module.exports = app;