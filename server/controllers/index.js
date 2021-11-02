const {
  organizations,
  getOrganization,
} = require('./organizations');

const {
  events,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventsByCategory,
} = require('./events');

const {
  login,
  signup,
  signout,
  getUserId,
} = require('./auth');

const addAttendence = require('./attendance');

const {
  error404,
  serverError,
} = require('./errors');

module.exports = {
  getEventsByCategory,
  getOrganization,
  addAttendence,
  organizations,
  updateEvent,
  deleteEvent,
  createEvent,
  serverError,
  getUserId,
  getEvent,
  error404,
  signout,
  signup,
  events,
  login,
};
