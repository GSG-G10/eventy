const connection = require('../../connection');

module.exports = async (organizationId) => {
  const { rows } = await connection.query(
    'SELECT * FROM organization WHERE id=$1',
    [organizationId],
  );
  return rows[0];
};
