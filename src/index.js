const config = require("./config/config.js");
const app = require("./server/expressApp.js");
require("./server/routes");

const nodeSchedule = require("node-schedule");
const { updateAllStudentsFee } = require("./utils/monthlyFeeFormat");
const logger = require("./utils/logger.js");

const server = require("http").Server(app);

server.listen(`${config.port}`, () => {
  logger.info(`Server now listening at localhost:${config.port}`)
});
nodeSchedule.scheduleJob("1 08 1 */1 *", async () => {
  await updateAllStudentsFee();
});
