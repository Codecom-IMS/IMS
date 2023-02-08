const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoConnection = () => {
  const username = "ali_murtaza";
  const password = "alimurtaza12345";
  const cluster = "Cluster0";
  const dbname = "IMS";
  const URI = `mongodb+srv://${username}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbname}?retryWrites=true&w=majority`;
  const db = mongoose.connect(URI, (error) => {
    if (error) {
      console.log("Connection with the Mongodb Unsuccesful");
      throw error;
    }
    console.log("Connection with Mongodb Succesfull");
  });
};
module.exports = mongoConnection;
