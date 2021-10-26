const events = require('./all-events');
const getEvent = require('./get-event-id');
const deleteEvent = require('./delete-event');
const updateEvent = require('./update-event');
const getEventsByCategory = require('./get-events-category');

module.exports = {
  events,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventsByCategory,
};
