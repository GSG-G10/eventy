const deleteQuery = require('./delete-event');
const getAllEvents = require('./all-events-query');
const getEventByIdQuery = require('./get-event-id');
const getEventsCategory = require('./get-events-category');
const getTopEventsQuery = require('./get-top-event');

module.exports = {
  deleteQuery,
  getAllEvents,
  getEventsCategory,
  getEventByIdQuery,
  getTopEventsQuery,
};
