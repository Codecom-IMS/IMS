const mongoose = require('mongoose');
const mongoConnection = () => {
    const username = "Ahtasham_khan";
    const password = "codecom"
    const cluster = "Cluster0";
    const dbname = "IMS";
    const URI = `mongodb+srv://${username}:${password}@${cluster}.ss7h6l6.mongodb.net/${dbname}?retryWrites=true&w=majority`
    mongoose.connect(URI, (error) => {
        if (error){
            console.log("Connection with Mongodb Unsuccessful");
            throw error;
        }
        console.log("Connection with Mongodb Successful");
    })
}

module.exports = mongoConnection