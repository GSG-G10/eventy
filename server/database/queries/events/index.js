const getEventsCategory = require('./get-events-category');
const getAllEvents = require('./all-events-query');
const getEventByIdQuery = require('./get-event-id');
const deleteQuery = require('./delete-event');

module.exports = {
  getEventsCategory,
  getAllEvents,
  getEventByIdQuery,
  deleteQuery,
};
