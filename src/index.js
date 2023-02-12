const config = require("./config/config.js");
const app = require("./server/expressApp.js");
const server = require("http").Server(app);
require("./server/routes");
const logger = require("./utils/logger");
server.listen(`${config.port}`, () => {
  logger.info("Backend Server Started");
});
