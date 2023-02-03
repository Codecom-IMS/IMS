const config = require('./config/config');
const app = require('./server/expressApp');
const server = require('http').Server(app);
require('./server/routes');

const nodeSchedule = require('node-schedule');
const { updateAllStudentsFeeStatus } = require('./utils/student');

server.listen(config.port,()=>{
    console.log('listening')
});
nodeSchedule.scheduleJob('1 08 1 */1 *',async ()=>{
    await updateAllStudentsFeeStatus();
});