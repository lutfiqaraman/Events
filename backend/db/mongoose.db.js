const mongoose = require('mongoose');
require('dotenv').config({ path: "../.env" });

const database = process.env.DB_NAME;

//MongoDB - Localhost :: EventsDB
const localURL = 'mongodb://127.0.0.1:27017/eventsdb';

const options = {
  dbName: database,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

exports.connection = () => {
  mongoose
  .connect(localURL, options)
  .then(() => {
    console.log('connect to local mongo database');
  })
  .catch((err) => {
    console.log(err);
  });
}
