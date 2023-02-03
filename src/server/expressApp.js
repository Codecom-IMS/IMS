const Connection = require('./connection.js');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
Connection.buildConnections();
app.use(express.json());
module.exports = app;
