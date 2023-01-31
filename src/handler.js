const config = require('./config/config');
const app = require('./server/expressApp');
const server = require('http').Server(app);
require('./server/routes');

const UserManagement = () => {
    server.listen(config.port,()=>{
        console.log('listening')
    })
}

module.exports = { UserManagement };