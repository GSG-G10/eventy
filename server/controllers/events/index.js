const getEventsByCategory = require('./get-events-category');
const events = require('./all-events');
const getEvent = require('./get-event-id');
const deleteEvent = require('./delete-event');
const createEvent = require('./post-event');
const updateEvent = require('./update-event');

module.exports = {
  events,
  getEvent,
  updateEvent,
  deleteEvent,
  createEvent,
  getEventsByCategory,
};
