const mongoConnection = require('../connection/mongo.js');

class Connection {
    static buildConnection(){
        mongoConnection();
    }
}
module.exports = Connection