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
  getEventsCategory,
  getEventByIdQuery,
} = require('./events');

module.exports = {
  getAllOrgs,
  deleteQuery,
  checkAccount,
  addAttendant,
  getAllEvents,
  getAttendance,
  getEventAttendant,
  getEventByIdQuery,
  getEventsCategory,
  addEventAttendance,
  addNewOrganization,
  getOrganizationByIdQuery,
};
