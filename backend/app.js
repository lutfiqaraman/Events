require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
const mongoDB = require('./db/mongoose.db');
mongoDB.connection();

// Event router
const eventsRouter = require('./routes/event.route');
app.use(eventsRouter);

const port = process.env.PORT;
app.listen(port, () => {
  process.stdout.write('server is up on port ' + port);
  process.stdout.write('\n');
});

module.exports = app;
