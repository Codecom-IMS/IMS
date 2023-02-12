const mongoose = require("mongoose");
const logger = require("../utils/logger");
mongoose.set("strictQuery", false);
const mongoConnection = () => {
  const username = "Codecom_IMS";
  const password = "codecom123456789";
  const cluster = "Cluster0";
  const dbname = "IMS";
  const URI = `mongodb+srv://${username}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(URI, (error) => {
    if (error) {
      logger.error("Connection with the Mongodb Unsuccesful");
      throw error;
    }
    logger.info("Connection with Mongodb Succesfull");
  });
};
module.exports = mongoConnection;
