const {
  getAllOrgs,
  checkAccount,
  addNewOrganization,
  getOrganizationByIdQuery,
} = require('./organizations');

const {
  deleteQuery,
  getAllEvents,
  getEventsCategory,
  getEventByIdQuery,
  createEventQuery,
  getOrganizationEvents,
} = require('./events');

module.exports = {
  getAllOrgs,
  deleteQuery,
  checkAccount,
  getAllEvents,
  createEventQuery,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationEvents,
  getOrganizationByIdQuery,
};
