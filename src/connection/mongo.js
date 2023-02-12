const mongoose = require("mongoose");
const mongoConnection = () => {
  const username = "Codecom_IMS";
  const password = "codecom123456789";
  const cluster = "Cluster0";
  const dbname = "IMS";
  const URI = `mongodb+srv://${username}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  mongoose.connect(URI, (error) => {
    if (error) {
      console.log("Connection with the Mongodb Unsuccesful");
      throw error;
    }
    console.log("Connection with Mongodb Succesfull");
  });
};
module.exports = mongoConnection;
