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
  getOrganizationEvents,
} = require('./events');

module.exports = {
  getAllOrgs,
  deleteQuery,
  checkAccount,
  getAllEvents,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationEvents,
  getOrganizationByIdQuery,
};
