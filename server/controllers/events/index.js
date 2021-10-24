const getEventsByCategory = require('./get-events-category');
const events = require('./all-events');
const getEvent = require('./get-event-id');
const deleteEvent = require('./delete-event');

module.exports = {
  getEventsByCategory,
  events,
  getEvent,
  deleteEvent,
};
