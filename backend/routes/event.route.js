const express = require('express');
const router = express.Router();
const Event = require('../controllers/event.controller');

router.get('/events', Event.getAllEvents);
router.post('/events', Event.createEvent);

module.exports = router;