const mongoose = require('mongoose');
require('dotenv').config({ path: "../.env" });

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const url = `mongodb+srv://${username}:${password}@cluster0-eqore.mongodb.net/`

const options = {
  dbName: database,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

exports.connection = () => {
  mongoose
  .connect(url, options)
  .then(() => {
    console.log('connect to mongo cloud');
  })
  .catch((err) => {
    console.log(err);
  });
}
