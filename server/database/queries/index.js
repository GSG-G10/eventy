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
  getOrganizationByIdQuery,
};
