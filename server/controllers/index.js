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
  createEvent,
  getEvent,
  serverError,
  error404,
  signup,
  events,
  login,
};
