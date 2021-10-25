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
} = require('./events');

module.exports = {
  getAllOrgs,
  deleteQuery,
  checkAccount,
  getAllEvents,
  updateEventQuery,
  getEventByIdQuery,
  getEventsCategory,
  addNewOrganization,
  getOrganizationByIdQuery,
};
