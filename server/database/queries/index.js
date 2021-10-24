const {
  getAllOrgs,
  addNewOrganization,
  getOrganizationByIdQuery,
} = require('./organizations');

const {
  deleteQuery,
  getAllEvents,
  getEventsCategory,
  getEventByIdQuery,
} = require('./events');

module.exports = {
  getAllOrgs,
  deleteQuery,
  getAllEvents,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationByIdQuery,
};
