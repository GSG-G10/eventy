const { getAllOrgs, getOrganizationByIdQuery, addNewOrganization } = require('./organizations');
const { getEventsCategory, getAllEvents, getEventByIdQuery } = require('./events');

module.exports = {
  getAllOrgs,
  getAllEvents,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationByIdQuery,
};
