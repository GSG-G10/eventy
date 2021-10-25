const deleteQuery = require('./delete-event');
const getAllEvents = require('./all-events-query');
const getEventByIdQuery = require('./get-event-id');
const getEventsCategory = require('./get-events-category');
const getTopEventsQuery = require('./get-top-event');
const createEventQuery = require('./create-event');

module.exports = {
  deleteQuery,
  getAllEvents,
  createEventQuery,
  getEventsCategory,
  getEventByIdQuery,
  getTopEventsQuery,
};
