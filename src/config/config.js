require('dotenv').config();
console.log(process.env.ACCESS_TOKEN_SECRET)
const config = {
    port: process.env.PORT || 3000,
    secret: process.env.ACCESS_TOKEN_SECRET
};

module.exports = config;
