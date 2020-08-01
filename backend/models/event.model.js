const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  className: {
    type: String
  },
  start: {
    type: Date,
    default: Date.now,
    required: true
  },
  end: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
