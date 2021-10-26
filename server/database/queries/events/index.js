const deleteQuery = require('./delete-event');
const getAllEvents = require('./all-events-query');
const getEventByIdQuery = require('./get-event-id');
const getTopEventsQuery = require('./get-top-event');
const updateEventQuery = require('./update-event-query');
const getEventsCategory = require('./get-events-category');
const getOrganizationEvents = require('./organization-events-query');

module.exports = {
  deleteQuery,
  getAllEvents,
  updateEventQuery,
  getEventsCategory,
  getEventByIdQuery,
  getTopEventsQuery,
  getOrganizationEvents,
};
