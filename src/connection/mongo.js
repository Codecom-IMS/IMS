const mongoose = require("mongoose");
const logger = require("../utils/logger");
mongoose.set("strictQuery", false);

const mongoConnection = () => {
  const userName = "Codecom_IMS";
  const password = "codecom123456789";
  const cluster = "Cluster0";
  const dbName = "IMS";
  const URI = `mongodb+srv://${userName}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  mongoose.connect(URI, (error) => {
    if (error) {
      logger.error("Connection with the Mongodb Unsuccesful");
      throw error;
    }
    logger.info("Connection with Mongodb Succesfull");
  });
};
module.exports = mongoConnection;
