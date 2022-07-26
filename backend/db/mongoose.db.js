const mongoose = require('mongoose');
require('dotenv').config({ path: "../.env" });

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

//MongoDB - Localhost
const localURL = 'mongodb://127.0.0.1:27017';

const options = {
  dbName: database,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

exports.connection = () => {
  mongoose
  .connect(localURL, options)
  .then(() => {
    console.log('connect to mongo database');
  })
  .catch((err) => {
    console.log(err);
  });
}
