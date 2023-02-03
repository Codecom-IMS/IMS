const mongoose = require("mongoose");
const mongoConnection = () => {
  const username = "Adeel_Irfan";
  const password = "codecom";
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
