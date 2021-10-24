const { organizations, getOrganization } = require('./organizations');
const { getEventsByCategory, getEvent, events } = require('./events');
const { error404, serverError } = require('./errors');
const signup = require('./auth/sign-up');

module.exports = {
  getEventsByCategory,
  getOrganization,
  organizations,
  serverError,
  getEvent,
  error404,
  events,
  signup,
};
