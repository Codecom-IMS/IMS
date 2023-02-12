const mongoConnection = require("../connection/mongo.js");

class Connections {
  static buildConnections() {
    mongoConnection();
  }
}
module.exports = Connections;
