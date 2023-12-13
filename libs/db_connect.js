const mongoose = require("mongoose");

//.env config
const dotenv = require('dotenv');
dotenv.config();

var dbConnection = process.env.DB_CONNECTION;
var dbHost = process.env.DB_HOST;
var dbPort = process.env.DB_PORT;
var dbName = process.env.DB_DATABASE;
var dbConnection = process.env.DB_CONNECTION;

const url = `${dbConnection}://${dbHost}:${dbPort}/${dbName}`

const dbConnect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = dbConnect;
