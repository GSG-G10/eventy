const { getOrgs, getOrganization } = require('./organizations');
const { getEventsByCategory } = require('./events');

module.exports = {
  getOrgs,
  getEventsByCategory,
  getOrganization
};
