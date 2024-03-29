const Event = require('../models/event.model');

// Get an event by event ID
exports.getEventById = async (req, res) => {
  const eventID = req.params.id;

  await Event
          .findById(eventID)
          .then((event) => {
            if (event) {
              res.status(200).json(event);
            } else {
              res.status(400).json('event cannot be found');
            }
          })
          .catch((err) => {
            res.json(err);
          });
};

// Get all events
exports.getAllEvents = async (req, res) => {
  await Event
      .find({})
      .then((data) => {
          res.status(200).json(data);
      })
      .catch((err) => {
          res.json(err);
      });
};

// Create an Event
exports.createEvent = async (req, res) => {
  const event = new Event({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  });

  await event
          .save()
          .then((result) => {
            res.status(201).json(result);
          })
          .catch((err) => {
            console.log(err);
          });
};

// Update an Event
exports.updateEvent = (req, res) => {
  const eventID = req.params.id;

  const event = {
    _id: eventID,
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  };

  Event.updateOne({ _id: eventID }, event).then((data) => {
    res.status(200).json(data);
  });
};

// Delete an Event
exports.deleteEvent = (req, res) => {

  const eventID = req.params.id;
  
  Event.deleteOne({ _id: eventID  }).then(() => {
    res.status(201).json('Event has been deleted');
  }).catch((err) => {
    res.json(err);
  });

};
