const mongoose = require("mongoose");

const mongoConnection = ()=>{
    const userName = "Codecom_IMS";
    const password = "codecom123456789";
    const cluster = "cluster0";
    const dbName = "IMS";
    // const URI = `mongodb+srv://${userName}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbName}?retryWrites=true&w=majority`
    const URI =  `mongodb://${userName}:${password}@ac-5hpaue3-shard-00-00.ss7h6l6.mongodb.net:27017,ac-5hpaue3-shard-00-01.ss7h6l6.mongodb.net:27017,ac-5hpaue3-shard-00-02.ss7h6l6.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-atu1b9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    mongoose.connect(URI, (error) => {
        if (error) {
            console.log("Connection with the Mongodb Unsuccesful");
            throw error;
        }
        console.log("Connection with Mongodb Succesfull")
    })
}

module.exports = mongoConnection;