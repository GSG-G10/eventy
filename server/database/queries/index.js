const {
  getAllOrgs,
  checkAccount,
  addNewOrganization,
  getOrganizationByIdQuery,
} = require('./organizations');

const {
  addAttendant,
  getAttendance,
  upadteAttendance,
  getEventAttendant,
  addEventAttendance,
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
  createEventQuery,
  upadteAttendance,
  updateEventQuery,
  getEventAttendant,
  getEventByIdQuery,
  getEventsCategory,
  addEventAttendance,
  addNewOrganization,
  getOrganizationEvents,
  getOrganizationByIdQuery,
};
