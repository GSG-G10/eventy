const { getAllOrgs, getOrganizationByIdQuery } = require('./organizations');
const { getEventsCategory, getAllEvents, getEventByIdQuery } = require('./events');

module.exports = {
  getAllOrgs,
  getEventsCategory,
  getAllEvents,
  getOrganizationByIdQuery,
  getEventByIdQuery,
};
