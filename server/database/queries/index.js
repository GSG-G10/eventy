const {
  getAllOrgs,
  checkAccount,
  addNewOrganization,
  getOrganizationByIdQuery,
} = require('./organizations');

const {
  deleteQuery,
  getAllEvents,
  updateEventQuery,
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
  updateEventQuery,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationEvents,
  getOrganizationByIdQuery,
};
