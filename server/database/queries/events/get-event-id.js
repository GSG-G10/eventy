const connection = require('../../connection');

module.exports = async (eventId) => {
  const { rows } = await connection.query(
    `SELECT events.*, organization.name
     FROM events INNER JOIN organization 
     ON events.organizer_id =organization.id 
     WHERE events.id = 3;`, [eventId],
  );
  return rows[0];
};
