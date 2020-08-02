const Event = require('../models/event.model');

exports.getEventById = (req, res) => {

};

exports.getAllEvents = (req, res) => {

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