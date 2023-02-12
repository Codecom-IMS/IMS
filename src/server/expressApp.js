const Connection = require("./connection.js");
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
Connection.buildConnections();
module.exports = app;
