const getAllOrgs = require('./get-all-orgs');
const checkAccount = require('./check-org-email');
const addNewOrganization = require('./add-new-org');
const getOrganizationByIdQuery = require('./get-org-id');

module.exports = {
  getAllOrgs,
  checkAccount,
  addNewOrganization,
  getOrganizationByIdQuery,
};
