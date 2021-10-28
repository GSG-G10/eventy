const {
  getAllOrgs,
  checkAccount,
  addNewOrganization,
  getOrganizationByIdQuery,
} = require('./organizations');

const {
  addAttendant,
  getAttendance,
  addEventAttendance,
  getEventAttendant,
} = require('./attendance');

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
  addAttendant,
  getAllEvents,
  getAttendance,
  getEventAttendant,
  createEventQuery,
  updateEventQuery,
  getEventByIdQuery,
  getEventsCategory,
  addEventAttendance,
  addNewOrganization,
  getOrganizationEvents,
  getOrganizationByIdQuery,
};
