const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

require('./routes/event.route')(app);

app.listen(port, () => {
  process.stdout.write('server is up on port ' + port);
  process.stdout.write('\n');
})

module.exports = app;
