const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World ...');
});

app.listen(port);