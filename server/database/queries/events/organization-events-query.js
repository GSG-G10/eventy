const connection = require('../../connection');

module.exports = async (id) => {
  const { rows } = await connection
    .query(`
    SELECT events.*, organization.name AS organizer
    FROM events INNER JOIN organization
    ON events.organizer_id = organization.id
    WHERE events.organizer_id=$1;`,
    [id]);

  return rows;
};
