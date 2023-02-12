const config = require("./config/config.js");
const app = require("./server/expressApp.js");
const logger = require("./utils/logger.js");

require("./server/routes");

const server = require("http").Server(app);

server.listen(`${config.port}`, () => {
  logger.info(`Server now listening at localhost:${config.port}`);
});
