const { getAllOrgs, getOrganizationByIdQuery } = require('./organizations');
const { getEventsCategory, getAllEvents } = require('./events');

module.exports = {
  getAllOrgs,
  getEventsCategory,
  getAllEvents,
  getOrganizationByIdQuery,
};
