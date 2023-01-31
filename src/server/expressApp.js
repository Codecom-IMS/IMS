const Connection = require('./connection');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
Connection.buildConnections();
app.use(express.json());


module.exports = app