const Event = require('../models/event.model');

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

exports.getAllEvents = async (req, res) => {
  await Event.find().then((data) => {
    res.status(200).json(data);
  });
};

exports.createEvent = async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    className: req.body.className,
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

exports.updateEvent = (req, res) => {

};

exports.deleteEvent = (req, res) => {

  const eventID = req.params.id;
  
  Event.deleteOne({ _id: eventID  }).then(() => {
    res.status(201).json('Event has been deleted');
  }).catch((err) => {
    res.json(err);
  });

};