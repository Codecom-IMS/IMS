const mongoConnection = require("../connection/mongo");

class Connections {
  static buildConnections() {
    mongoConnection();
  }
}
module.exports = Connections;
