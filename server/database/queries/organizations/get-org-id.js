const connection = require('../../connection');

const getOrganizationByIdQuery = (organizationId) => connection.query(
  'SELECT * FROM organization WHERE id=$1', [organizationId],
);

module.exports = getOrganizationByIdQuery;
