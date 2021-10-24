const { getAllOrgs, getOrganizationByIdQuery } = require('./organizations');
const {
  getEventsCategory, getAllEvents, getEventByIdQuery, deleteQuery,
} = require('./events');

module.exports = {
  getAllOrgs,
  getAllEvents,
  getEventByIdQuery,
  getEventsCategory,
  getOrganizationByIdQuery,
  deleteQuery,
};
