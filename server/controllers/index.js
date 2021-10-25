const {
  organizations,
  getOrganization,
} = require('./organizations');

const {
  events,
  getEvent,
  updateEvent,
  deleteEvent,
  getEventsByCategory,
} = require('./events');

const { login, signup } = require('./auth');

const {
  error404,
  serverError,
} = require('./errors');

module.exports = {
  getEventsByCategory,
  getOrganization,
  organizations,
  updateEvent,
  deleteEvent,
  serverError,
  error404,
  getEvent,
  signup,
  events,
  login,
};
