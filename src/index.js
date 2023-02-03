const config = require("./config/config");
const app = require("./server/expressApp");
require("./server/routes");

const server = require("http").Server(app);

server.listen(`${config.port}`, () => {
  console.log(`Server now listening at http://localhost:${config.port}`);
});
