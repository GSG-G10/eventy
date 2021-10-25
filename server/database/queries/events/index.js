const deleteQuery = require('./delete-event');
const getAllEvents = require('./all-events-query');
const getEventByIdQuery = require('./get-event-id');
const getEventsCategory = require('./get-events-category');
const getOrganizationEvents = require('./organization-events-query');

module.exports = {
  deleteQuery,
  getAllEvents,
  getEventsCategory,
  getEventByIdQuery,
  getOrganizationEvents,
};
