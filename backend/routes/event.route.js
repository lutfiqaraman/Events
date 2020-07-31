module.exports = app => {

  const Event = require('../controllers/event.controller');

  app.get('/events', (req, res) => {
    res.send('event is here ...');
  });
}