const config = require("./config/config.js");
const app = require("./server/expressApp.js");
const server = require("http").Server(app);
require("./server/routes");

const nodeSchedule = require("node-schedule");
const { updateAllStudentsFeeStatus } = require("./utils/student");
const logger = require("./utils/logger");

server.listen(config.port, () => {
  logger.info(`Server now listening at localhost:${config.port}`);
});
nodeSchedule.scheduleJob("1 08 1 */1 *", async () => {
  await updateAllStudentsFeeStatus();
});
