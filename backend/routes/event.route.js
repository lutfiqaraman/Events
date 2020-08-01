const express = require('express');
const router = express.Router();
const Event = require('../controllers/event.controller');

// Get event by id and get all events
router.get('/events', Event.getAllEvents);
router.get('/events/:id', Event.getEventById);

// Insert new Event
router.post('/events', Event.createEvent);

// Update event by id
router.put('/events/:id', Event.updateEvent);

// Delete event by id
router.delete('/events:id', Event.deleteEvent);

module.exports = router;