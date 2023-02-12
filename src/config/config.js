require("dotenv").config();
const config = {
  port: process.env.PORT || 5000,
  secret: process.env.ACCESS_TOKEN_SECRET,
};

module.exports = config;
