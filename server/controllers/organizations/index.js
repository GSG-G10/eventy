const organizations = require('./get-all-organizations');
const getOrganization = require('./get-organization-id');
const getOrganizationEvents = require('./get-organization-events');

module.exports = {
  organizations,
  getOrganization,
  getOrganizationEvents,
};
