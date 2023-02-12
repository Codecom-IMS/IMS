const Connection = require("./connection.js");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
Connection.buildConnection();
app.use(express.json());

module.exports = app;
