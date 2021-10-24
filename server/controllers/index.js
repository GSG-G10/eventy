const { organizations, getOrganization } = require('./organizations');
const { getEventsByCategory, getEvent, events } = require('./events');
const { error404, serverError } = require('./errors');
const { login } = require('./auth');

module.exports = {
  organizations,
  getEventsByCategory,
  getOrganization,
  error404,
  serverError,
  getEvent,
  events,
  login,
};
